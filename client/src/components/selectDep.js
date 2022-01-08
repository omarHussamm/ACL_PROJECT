import React from 'react'
import { Link } from 'react-router-dom'
class selectDep extends React.Component {
    render() {
        return (
            <div>

                {this.props.userToken!==0 &&
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
                }
                {this.props.userToken ===0 &&
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

                <div>
                    <form onSubmit={this.props.onSubmit}>
                        <div>
                            <label>
                                Flight Number:
                                <input type="text" name="name" value={this.props.flightNumber} onChange={this.props.onChangeFlightNumber} />
                            </label>
                        </div>
                        <input type="submit" value="Select Flight" />
                    </form>


                </div>

            </div>
        )
    }
}
export default selectDep