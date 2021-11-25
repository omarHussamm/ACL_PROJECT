import React from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'
class deleteFlight extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        from: "",
        to: "",
        date: "",
        cabin: "",
        numOfSeatsAvailable: "",
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
    onChangeDate = e => {
        this.setState({
            date: e.target.value
        })
    };
    onChangeCabin = e => {
        this.setState({
            cabin: e.target.value
        })
    };
    onChangeSeats = e => {
        this.setState({
            numOfSeatsAvailable: e.target.value
        })
    };


    onSubmit = e => {
        e.preventDefault();
        
        const flight = {
            from: this.state.from,
            to: this.state.to,
            date: this.state.date,
            cabin: this.state.cabin,
            numOfSeatsAvailable: this.state.numOfSeatsAvailable
        };
        console.log("did we get here front end?",flight);
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
                                cabin:
                                <input type="text" name="name" value={this.state.cabin} onChange={this.onChangeCabin} />
                            </label>
                        </div>
                        <div>
                            <label>
                                date:
                                <input type="text" name="name" value={this.state.date} onChange={this.onChangeDate} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Number of seats available:
                                <input type="text" name="name" value={this.state.numOfSeatsAvailable} onChange={this.onChangeSeats} />
                            </label>
                        </div>
                        <input type="submit" value="Search" />
                    </form>
                </div>

                <br />
                <div>
                    <ul>
                        {this.state.flights.map(flights => {
                            return (
                                <div>
                                    <li>{flights._id}</li>
                                    <li>{flights.from}</li>
                                    <li>{flights.to}</li>
                                    <li>{flights.date}</li>
                                    <li>{flights.cabin}</li>
                                    <li>{flights.numOfSeatsAvailable}</li>
                                </div>
                            );

                        })
                        }
                    </ul>

                </div>

            </div>
        )
    }


}

export default deleteFlight