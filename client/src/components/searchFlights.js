import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
class deleteFlight extends React.Component {
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
        flights: []
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
    onChangeFlightNumber = e => {
        this.setState({
            flightNumber: e.target.value
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
            flightNumber: this.state.flightNumber
        };
        console.log("did we get here front end?", flight);
        axios.post('http://localhost:5000/flights/searchFlight'
            , flight).then(res => {
                console.log('what about here?', res.data);
                this.setState({ flights: res.data })
            }
            )
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

                <div>
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
                                <input type="text" name="name" value={this.state.departureDate} onChange={this.onChangeDepartureDate} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Arrival Date:
                                <input type="text" name="name" value={this.state.arrivalDate} onChange={this.onChangeArrivalDate} />
                            </label>
                        </div>

                        <input type="submit" value="Search" />
                    </form>
                </div>

                <br />
                <div>
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
                        </tr>
                        {this.state.flights.map(flight => {
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
                                </tr>
                            );

                        })
                        }
                    </table>
                </div>

            </div>
        )
    }


}

export default deleteFlight