import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useContext } from 'react';
import { useState } from 'react';
import { RatingContext } from '../../../App';

const UserRating = () => {
    const [value, setValue] = useState(0);
    const [rating, setRating] = useContext(RatingContext);

    return (
      <div>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography style={{color: '#3a4256', fontWeight: '700'}} component="legend">Rating</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              setRating(newValue);
            }}
          />
        </Box>
      </div>
    );
};

export default UserRating;