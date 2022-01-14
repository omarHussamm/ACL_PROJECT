import React from 'react'
import {
    Link
} from "react-router-dom";


class adminLinks extends React.Component {

    render() {
        return (
            <>
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarColor01">
                            <ul class="navbar-nav me-auto nav">
                                <li class="nav-item nav2">
                                    <Link class="nav-link" to="/createFlight">Create Flight</Link>
                                </li>
                                <li class="nav-item nav2">
                                    <Link class="nav-link" to="/updateFlight">Update Flight</Link>
                                </li>
                                <li class="nav-item nav2">
                                    <Link class="nav-link" to="/listAllFlights">List All Flights</Link>
                                </li>
                                <li class="nav-item nav2">
                                    <Link class="nav-link" to="/searchFlights">Search for Flights</Link>
                                </li>
                            </ul>
                            <div class="d-flex nav">
                                <Link class="nav-link me-sm-2" to="/deleteFlight">Delete Flight</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default adminLinks
