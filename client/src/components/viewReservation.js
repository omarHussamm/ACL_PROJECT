import React from 'react'
import axios from 'axios'
import {
    Link
} from "react-router-dom";


class viewReservation extends React.Component {

    state = {
        reservations: []
    }

    componentDidMount = () => {
        //get reservations
        console.log("get reservations");
        axios.get("http://localhost:5000/user/reservations").then(res => {
            const reservations = res.data;
            this.setState({ reservations: reservations });
        });
    }
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
                            <Link to="/editReservation">Edit Reservation</Link>
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
                        <li>
                            <Link to="/changePassword">Change Password</Link>
                        </li>
                    </ul>


                    <hr />
                    <h1> viewReservation </h1>
                    <table>
                        <tr>
                            <th>flight Number</th>
                            <th>from</th>
                            <th>to</th>
                            <th>Departure Date</th>
                            <th>Arrival Date</th>
                            <th>Economy Seats Available</th>
                            <th>Business Seats Available</th>
                            <th>First Class Seats Available</th>
                            <th>Base Price</th>
                        </tr>
                        {this.state.reservations.map(flight => {
                            return (
                                <tr>
                                    <td>{flight.flightNumber}</td>
                                    <td>{flight.from}</td>
                                    <td>{flight.to}</td>
                                    <td>{flight.arrivalDate}</td>
                                    <td>{flight.departureDate}</td>
                                    <td>{flight.numOfEconomySeatsAvailable}</td>
                                    <td>{flight.numOfBusinessSeatsAvailable}</td>
                                    <td>{flight.numOfFirstClassSeatsAvailable}</td>
                                    <td>{flight.basePrice}</td>
                                </tr>
                            )
                        })}
                    </table>

                </div>

            </div>
        );
    }
}
export default viewReservation