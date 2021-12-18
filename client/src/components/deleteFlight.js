import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'
class deleteFlight extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        flightNumber: ""
    };

    onChangeFlightNumber = e => {
        this.setState({
            flightNumber: e.target.value
        })
    };

    onSubmit = e => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to delete?")) {
            axios.post('http://localhost:5000/flights/deleteFlight'
                , { flightNumber: this.state.flightNumber }).then(res => {
                }
                )
        }
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
                        <input type="submit" value="Delete" />
                    </form>


                </div>
            </div>

        )
    }



}
export default deleteFlight
