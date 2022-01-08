import React from 'react'
import axios from 'axios'
import Flight from './adminFlight'
import { Link } from 'react-router-dom'
class deleteFlight extends React.Component {
    state = {
        flights: []
    }
    listflights = () => {
        axios.get("http://localhost:5000/flights").then(res => {
            const flights = res.data;
            this.setState({ flights:flights });
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


                <ul class="list-group">
                {this.state.flights.map(flight => {
                        return (
                            <li key={flight._id}>
                                <Flight flight={flight} />
                            </li>

                        );

                    })
                    }
                </ul>
                {/* <table>
                <tbody>
                    <tr>
                        <th>flight Number</th>
                        <th>from</th>
                        <th>to</th>
                        <th>Departure Date</th>
                        <th>Arrival Date</th>
                        <th>Economy Seats Available</th>
                        <th>Business Seats Available</th>
                        <th>First Class Seats Available</th>
                        <th> Base Price </th>
                    </tr>
                    {this.state.flights.map(flight => {
                        return (
                            <tr key={flight._id}>
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
                    }
                   </tbody>
                </table> */}
            </div>
        )
    }
}

export default deleteFlight