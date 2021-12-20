import React from 'react'
import {
    Link
} from "react-router-dom";


class user_guest extends React.Component {

    render() {
        return (
            <div>
                <div>
                    {this.props.user &&
                        <ul>
                            <li>
                                <Link to="/editProfile">Edit Profile</Link>
                            </li>
                            <li>
                                <Link to="/viewReservation">View Reservations</Link>
                            </li>
                            <li>
                                <Link to="/cancelReservation">Cancel Reservations</Link>
                            </li>
                            <li>
                            <Link to="/searchFlights2">Search for Flights</Link>
                            </li>
                            <li>
                                <Link to="/selectFlight">Select Flight</Link>
                            </li>
                        </ul>
                    }
                    {!this.props.user &&
                        <ul>
                            <li>
                                <Link to="/searchFlights2">Search for Flights</Link>
                            </li>
                            <li>
                                <Link to="/selectFlight">Select Flight</Link>
                            </li>
                        </ul>
                    }

                    <hr />
                    <h1> Welcome to BongAirlines! </h1>
                </div>

            </div>
        );
    }
}
export default user_guest
