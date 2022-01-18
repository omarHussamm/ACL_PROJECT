import React from 'react'
import {
    Link
} from "react-router-dom";


class userLinks extends React.Component {

    render() {
        return (
            <>
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarColor01">
                            <ul class="navbar-nav me-auto nav">
                                <li class="nav-item nav2">
                                    <Link class="nav-link" to="/viewReservation">View Reservations</Link>
                                </li>
                                <li class="nav-item nav2">
                                    <Link class="nav-link" to="/editReservation">Update Flight</Link>
                                </li>
                                <li class="nav-item nav2">
                                    <Link class="nav-link" to="/editProfile">Edit Profile</Link>
                                </li>
                                <li class="nav-item nav2">
                                    <Link class="nav-link" to="/searchFlights2">Search for Flights</Link>
                                </li>
                                <li class="nav-item nav2">
                                    <Link class="nav-link" to="/selectFlight">Select Flight</Link>
                                </li>
                                <li class="nav-item nav2">
                                    <Link class="nav-link" to="/changePassword">Change Password</Link>
                                </li>
                            </ul>
                            <div class="d-flex nav">
                                <Link class="nav-link me-sm-2" to="/cancelReservation">Cancel Reservations</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default userLinks
