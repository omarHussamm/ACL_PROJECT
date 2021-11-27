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
                <ul>
                    {this.state.flights.map(flights => {
                        return (
                            <div>
                                <li>{flights.flightNumber}</li>
                                <li>{flights.from}</li>
                                <li>{flights.to}</li>
                                <li>{flights.arrivalDate}</li>
                                <li>{flights.deaprtureDate}</li>
                                <li>{flights.numOfEconomySeatsAvailable}</li>
                                <li>{flights.numOfBusinessSeatsAvailable}</li>
                                <li>{flights.numOfFirstClassSeatsAvailable}</li>
                            </div>
                        );

                    })
                    }
                </ul>
            </div>
        )
    }
}

export default deleteFlight