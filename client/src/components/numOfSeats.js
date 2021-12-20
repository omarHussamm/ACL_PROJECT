import React from 'react'
class numOfSeats extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    state = {
        numOfEconomySeatsAvailable: "",
        numOfBusinessSeatsAvailable: "",
        numOfFirstClassSeatsAvailable: "",
        numOfEconomySeatsAvailable2: "",
        numOfBusinessSeatsAvailable2: "",
        numOfFirstClassSeatsAvailable2: "",
    }

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

    onChangenumOfFirstClassSeatsAvailable2 = e => {
        this.setState({
            numOfFirstClassSeatsAvailable2: e.target.value
        })
    };
    onChangenumOfBusinessSeatsAvailable2 = e => {
        this.setState({
            numOfBusinessSeatsAvailable2: e.target.value
        })
    };
    onChangenumOfEconomySeatsAvailable2 = e => {
        this.setState({
            numOfEconomySeatsAvailable2: e.target.value
        })
    };

    onSubmit = e => {
        e.preventDefault();

        this.props.onSubmit3(
            this.state.numOfEconomySeatsAvailable,
            this.state.numOfBusinessSeatsAvailable,
            this.state.numOfFirstClassSeatsAvailable,
            this.state.numOfEconomySeatsAvailable2,
            this.state.numOfBusinessSeatsAvailable2,
            this.state.numOfFirstClassSeatsAvailable2
        )
    }

    render() {
        return (
            <div>
                <h1>
                    Departure Flight
                </h1>
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
                        <th>Base Price</th>
                    </tr>
                    <tr>
                        <td>{this.props.departureFlight.flightNumber}</td>
                        <td>{this.props.departureFlight.from}</td>
                        <td>{this.props.departureFlight.to}</td>
                        <td>{this.props.departureFlight.arrivalDate}</td>
                        <td>{this.props.departureFlight.departureDate}</td>
                        <td>{this.props.departureFlight.numOfEconomySeatsAvailable}</td>
                        <td>{this.props.departureFlight.numOfBusinessSeatsAvailable}</td>
                        <td>{this.props.departureFlight.numOfFirstClassSeatsAvailable}</td>
                        <td>{this.props.departureFlight.basePrice}</td>
                    </tr>
                </table>
                <div>
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

                </div>
                <hl />
                <h1>
                    Arrival Flight
                </h1>
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
                        <th>Base Price</th>
                    </tr>
                    <tr>
                        <td>{this.props.arrivalFlight.flightNumber}</td>
                        <td>{this.props.arrivalFlight.from}</td>
                        <td>{this.props.arrivalFlight.to}</td>
                        <td>{this.props.arrivalFlight.arrivalDate}</td>
                        <td>{this.props.arrivalFlight.departureDate}</td>
                        <td>{this.props.arrivalFlight.numOfEconomySeatsAvailable}</td>
                        <td>{this.props.arrivalFlight.numOfBusinessSeatsAvailable}</td>
                        <td>{this.props.arrivalFlight.numOfFirstClassSeatsAvailable}</td>
                        <td>{this.props.arrivalFlight.basePrice}</td>
                    </tr>
                </table>
                <div>
                    <div>
                        <label>
                            Number of Economy Seats:
                            <input type="text" name="name" value={this.state.numOfEconomySeatsAvailable2} onChange={this.onChangenumOfEconomySeatsAvailable2} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Number of Business Seats:
                            <input type="text" name="name" value={this.state.numOfBusinessSeatsAvailable2} onChange={this.onChangenumOfBusinessSeatsAvailable2} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Number of First-Class Seats:
                            <input type="text" name="name" value={this.state.numOfFirstClassSeatsAvailable2} onChange={this.onChangenumOfFirstClassSeatsAvailable2} />
                        </label>
                    </div>

                </div>
                <div>
                    <form onSubmit={this.onSubmit}>
                        
                        <input type="submit" value="Confirm Number of Seats" />
                    </form>

                </div>
            </div>
        )
    }
}
export default numOfSeats