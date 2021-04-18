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
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import ManageServices from './components/Admin/ManageServices/ManageServices';

export const UserContext = createContext();
export const RatingContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [rating, setRating] = useState(0);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <RatingContext.Provider value={[rating, setRating]}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute path="/addCourse">
                <Admin />
              </PrivateRoute>
              <PrivateRoute path="/makeAdmin">
                <MakeAdmin />
              </PrivateRoute>
              <PrivateRoute path="/manageServices">
                <ManageServices />
              </PrivateRoute>
              <PrivateRoute path="/bookingList">
                <BookingList />
              </PrivateRoute>
              <PrivateRoute path="/review">
                <Reviews />
              </PrivateRoute>
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
      </RatingContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
