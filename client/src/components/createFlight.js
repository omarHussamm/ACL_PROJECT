import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'
class createFlight extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        flightNumber: "",
        from: "",
        to: "",
        arrivalDate: "",
        departureDate: "",
        numOfEconomySeatsAvailable: "",
        numOfBusinessSeatsAvailable: "",
        numOfFirstClassSeatsAvailable: "",
        basePrice: ""
    };

    onChangeFrom = e => {
        this.setState({
            from: e.target.value
        })
    };
    onChangeFlightNumber = e => {
        this.setState({
            flightNumber: e.target.value
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
    onChangeDepartureDate = e => {
        this.setState({
            departureDate: e.target.value
        })
    };
    onChangeEconomySeats = e => {
        this.setState({
            numOfEconomySeatsAvailable: e.target.value
        })
    };
    onChangeBusinessSeats = e => {
        this.setState({
            numOfBusinessSeatsAvailable: e.target.value
        })
    };
    onChangeFirstSeats = e => {
        this.setState({
            numOfFirstClassSeatsAvailable: e.target.value
        })
    };
    onChangeBasePrice = e => {
        this.setState({
            from: e.target.basePrice
        })
    };


    onSubmit = e => {
        e.preventDefault();
        const flight = {
            from: this.state.from,
            to: this.state.to,
            flightNumber: this.state.flightNumber,
            arrivalDate: this.state.arrivalDate,
            departureDate: this.state.departureDate,
            numOfEconomySeatsAvailable: this.state.numOfEconomySeatsAvailable,
            numOfBusinessSeatsAvailable: this.state.numOfBusinessSeatsAvailable,
            numOfFirstClassSeatsAvailable: this.state.numOfFirstClassSeatsAvailable,
            basePrice: this.state.basePrice
        };
        axios.post('http://localhost:5000/flights/createFlight'
            , flight)

    }


    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/createFlight">Create Flight</Link>
                    </li>
                    <li>
                        <Link to="/deleteFlight">Delete Flight</Link>
                    </li>
                    <li>
                        <Link to="/updateFlight">Update Flight</Link>
                    </li>
                    <li>
                        <Link to="/listAllFlights">List All Flights</Link>
                    </li>
                    <li>
                        <Link to="/searchFlights">Search for Flights</Link>
                    </li>
                </ul>

                <hr />

                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>
                            Flight Number:
                            <input type="text" name="name" value={this.state.flightNumber} onChange={this.onChangeFlightNumber} />
                        </label>
                    </div>
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
                            <input type="text" name="name" value={this.state.numOfEconomySeatsAvailable} onChange={this.onChangeEconomySeats} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Number of Business Seats:
                            <input type="text" name="name" value={this.state.numOfBusinessSeatsAvailable} onChange={this.onChangeBusinessSeats} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Number of First-Class Seats:
                            <input type="text" name="name" value={this.state.numOfFirstClassSeatsAvailable} onChange={this.onChangeFirstSeats} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Base Price:
                            <input type="text" name="name" value={this.state.basePrice} onChange={this.onChangeBasePrice} />
                        </label>
                    </div>
                    <input type="submit" value="Create Flight" />
                </form>
            </div>
        )
    }


}

export default createFlight
