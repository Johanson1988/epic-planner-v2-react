import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return(
            <div>
                <h1>HOME</h1>
                <h2>Epic!</h2>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/my-dayplans">My Dayplans</Link>
                <Link to="/create-dayplan">Create a DayPlan</Link>
            </div>
        )
    }
}