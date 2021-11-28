import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
class deleteFlight extends React.Component {
    state = {
        flights: []
    }
    listflights = () => {
        axios.get("http://localhost:5000/flights").then(res => {
            const flights = res.data;
            this.setState({ flights });
            console.log(flights);
        });


    };

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

                <button onClick={this.listflights}>
                    Show All Flights
                </button>
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
        )
    }
}

export default deleteFlight