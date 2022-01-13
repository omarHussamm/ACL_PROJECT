import React from 'react'
import axios from 'axios'
import Flight from './flight';
import { Link } from 'react-router-dom'
class searchFlights2 extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        from: "",
        to: "",
        arrivalDate: "",
        departureDate: "",
        flights: [],
        numOfBusinessSeatsAvailable: "",
        numOfEconomySeatsAvailable: "",
        numOfFirstClassSeatsAvailable: ""
    };

    onChangeFrom = e => {
        this.setState({
            from: e.target.value
        })
    };

    onChangeTo = e => {
        this.setState({
            to: e.target.value
        })
    };
    onChangeArrivalDate = e => {
        this.setState({
            arrivalDate: e.target.value
        })
    };
    onChangenumOfFirstClassSeatsAvailable = e => {
        this.setState({
            numOfFirstClassSeatsAvailable: e.target.value
        })
    };
    onChangenumOfBusinessSeatsAvailable = e => {
        this.setState({
            numOfBusinessSeatsAvailable: e.target.value
        })
    };
    onChangenumOfEconomySeatsAvailable = e => {
        this.setState({
            numOfEconomySeatsAvailable: e.target.value
        })
    };
    onChangeDepartureDate = e => {
        this.setState({
            departureDate: e.target.value
        })
    };


    onSubmit = e => {
        e.preventDefault();

        const flight = {
            from: this.state.from,
            to: this.state.to,
            arrivalDate: this.state.arrivalDate,
            departureDate: this.state.departureDate,
            numOfBusinessSeatsAvailable: this.state.numOfBusinessSeatsAvailable,
            numOfEconomySeatsAvailable: this.state.numOfEconomySeatsAvailable,
            numOfFirstClassSeatsAvailable: this.state.numOfFirstClassSeatsAvailable
        };
        axios.post('http://localhost:5000/userGuest/search'
            , flight).then(res => {
                this.setState({ flights: res.data })
            }
            )
    }


    render() {
        return (
            <div>
                {this.props.userToken !== 0 &&
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
                {this.props.userToken === 0 &&
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
                    <form onSubmit={this.onSubmit}>

                        <div>
                            <label>
                                from:
                                <input type="text" name="name" value={this.state.from} onChange={this.onChangeFrom} />
                            </label>
                        </div>
                        <div>
                            <label>
                                to:
                                <input type="text" name="name" value={this.state.to} onChange={this.onChangeTo} />
                            </label>
                        </div>
                        <div>

                            <label>
                                Departure Date:
                                <form>
                                    <div class="nativeDateTimePicker">
                                        <input type="datetime-local" id="party" name="bday" value={this.state.departureDate} onChange={this.onChangeDepartureDate} />
                                        <span class="validity"></span>

                                    </div>
                                </form>
                            </label>
                        </div>
                        <div>
                            <label>
                                Arrival Date:
                                <form>
                                    <div class="nativeDateTimePicker">
                                        <input type="datetime-local" id="party" name="bday" value={this.state.arrivalDate} onChange={this.onChangeArrivalDate} />
                                        <span class="validity"></span>

                                    </div>
                                </form>
                            </label>
                        </div>
                        <div>
                            <label>
                                Number of Economy Seats:
                                <input type="text" name="name" value={this.state.numOfEconomySeatsAvailable} onChange={this.onChangenumOfEconomySeatsAvailable} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Number of Business Seats:
                                <input type="text" name="name" value={this.state.numOfBusinessSeatsAvailable} onChange={this.onChangenumOfBusinessSeatsAvailable} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Number of First-Class Seats:
                                <input type="text" name="name" value={this.state.numOfFirstClassSeatsAvailable} onChange={this.onChangenumOfFirstClassSeatsAvailable} />
                            </label>
                        </div>

                        <input type="submit" value="Search" />
                    </form>
                </div>

                <br />
                <div>
                    <ul class="list-group">
                        {this.state.flights.map(flight => {
                            return (
                                <li key={flight._id}>
                                    <Flight flight={flight} user={'user'} />
                                </li>
                            );
                        })
                        }
                    </ul>
                </div>

            </div>
        )
    }


}

export default searchFlights2