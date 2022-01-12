import React from 'react'
import axios from 'axios'
import Flight from './flight'
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
            </div>
        )
    }
}

export default deleteFlight