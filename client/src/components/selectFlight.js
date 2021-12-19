import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'
class selectFlight extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmit2 = this.onSubmit2.bind(this);
    }

    state = {
        flightNumber: "",
        flightNumber2: "",
        returnFlight: false,
        returnFlights: [],
        departureFlight:"",
    };

    onChangeFlightNumber = e => {
        this.setState({
            flightNumber: e.target.value
        })
    };

    onChangeFlightNumber2 = e => {
        this.setState({
            flightNumber2: e.target.value
        })
    };

    onSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/flights/selectDepFlight'
            , { flightNumber: this.state.flightNumber }).then(res => {
                this.setState({
                    returnFlight: true,
                    returnFlights: res.data.returnFlights,
                    departureFlight: res.data.departureFlight
                });
            }
            )
    }
    onSubmit2 = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/flights/selectArrFlight'
            , { flightNumber: this.state.flightNumber }).then(res => {
                this.props.onChooseFlight(this.state.departureFlight,res.data);

            }
            )
    }



    render() {
        return (
            <div>
                {!this.state.returnFlight &&
                    <div>

                        <ul>
                            <li>
                                <Link to="/searchFlights2">Search for Flights</Link>
                            </li>
                            <li>
                                <Link to="/selectFlight">Select Flight</Link>
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
                                <input type="submit" value="Select Flight" />
                            </form>


                        </div>

                    </div>}
                {this.state.returnFlight &&
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
                            {this.state.returnFlights.map(flight => {
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
                                );
                            })
                            }</table>
                              <div>
                            <form onSubmit={this.onSubmit2}>
                                <div>
                                    <label>
                                        Return Flight Number:
                                        <input type="text" name="name" value={this.state.flightNumber2} onChange={this.onChangeFlightNumber2} />
                                    </label>
                                </div>
                                <input type="submit" value="Select Flight" />
                            </form>


                        </div>
                    </div>}
            </div>
        )
    }



}
export default selectFlight
