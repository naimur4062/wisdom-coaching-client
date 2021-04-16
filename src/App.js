import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Admin from './components/Admin/Admin/Admin';
import Book from './components/Admin/Book/Book';
import BookingList from './components/Admin/BookingList/BookingList';
import UserBookingList from './components/Admin/UserBookingList/UserBookingList';
import Reviews from './components/Admin/Reviews/Reviews';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/bookingList">
              <BookingList />
            </Route>
            <Route path="/review">
              <Reviews />
            </Route>
            <PrivateRoute path="/userBookingList">
              <UserBookingList />
            </PrivateRoute>
            <PrivateRoute path="/course/:id">
              <Book />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
  );
}

export default App;
