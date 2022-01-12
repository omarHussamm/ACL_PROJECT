import React from 'react'
import axios from 'axios'
import {
    Link
} from "react-router-dom";


class cancelReservation extends React.Component {


    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        reservationNumber: ""
    };

    onChangeReservationNumber = e => {
        this.setState({
            reservationNumber: e.target.value
        })
    };

    onSubmit = e => {
        e.preventDefault();

        if (window.confirm("Are you sure you want to cancel?")) {
             axios.post('http://localhost:5000/user/cancelReservation'
                 , { reservationNumber: this.state.reservationNumber }).then(res => {
                 }
                 )
        }
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
                    <h1>cancel Reservation</h1>

                    <div>
                        <form onSubmit={this.onSubmit}>
                            <div>
                                <label>
                                    Reservation Number:
                                    <input type="text" name="name" value={this.state.reservationNumber} onChange={this.onChangeReservationNumber} />
                                </label>
                            </div>
                            <input type="submit" value="Cancel" />
                        </form>


                    </div>
                </div>

            </div>
        );
    }
}
export default cancelReservation