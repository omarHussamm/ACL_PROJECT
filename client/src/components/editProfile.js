import React from 'react'
import {
    Link
} from "react-router-dom";


class editProfile extends React.Component {

    render() {
        return (
            <div>
                <div>
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


                    <hr />
                    <h1> editProfile </h1>
                </div>

            </div>
        );
    }
}
export default editProfile