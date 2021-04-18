import { MenuItem, Select } from '@material-ui/core';
import React from 'react';
import './DropDown.css';

const DropDown = ({ booking }) => {
    const handleUpdate = (e, id) => {
        fetch('http://localhost:5000/update/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: e.target.value })
        })

    }
    return (
        <div className="dropdown mb-2">
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={booking.status}
                onChange={(e) => handleUpdate(e, booking._id)}
            >
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="On going">On going</MenuItem>
                <MenuItem value="Done">Done</MenuItem>
            </Select>
        </div>
    );
};

export default DropDown;