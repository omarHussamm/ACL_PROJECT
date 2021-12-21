import React from 'react'
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
        if (window.confirm("Are you sure you want to delete?")) {
            // axios.post('http://localhost:5000/flights/deleteFlight'
            //     , { flightNumber: this.state.flightNumber }).then(res => {
            //     }
            //     )
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
                    <h1>cancelReservation</h1>

                    <div>
                        <form onSubmit={this.onSubmit}>
                            <div>
                                <label>
                                    Reservation Number:
                                    <input type="text" name="name" value={this.state.reservationNumber} onChange={this.onChangeReservationNumber} />
                                </label>
                            </div>
                            <input type="submit" value="Delete" />
                        </form>


                    </div>
                </div>

            </div>
        );
    }
}
export default cancelReservation