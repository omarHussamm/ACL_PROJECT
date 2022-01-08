import React from 'react'
import logo from "../BongBoeing.png";
class selectArr extends React.Component {
    state = {
        flightNumber: "",
        flightChoosen: false,
        payment: false,
        choosenBusinessSeats: "",
        choosenEconomySeats: "",
        choosenFirstClassSeats: "",
        flight: "",
    }

    onChangeFirstClassSeats = (e) => {
        this.setState({
            choosenFirstClassSeats: e.target.value,
        });
    };
    onChangeBusinessSeats = (e) => {
        this.setState({
            choosenBusinessSeats: e.target.value,
        });
    };
    onChangeEconomySeats = (e) => {
        this.setState({
            choosenEconomySeats: e.target.value,
        });
    };

    onChooseFlight = e => {
        e.preventDefault();
        this.setState({
            flightChoosen: true,
            flight: {
                flightNumber: 1213,
                from: "happy",
                to: "sad",
                departureDate: "2021-12-24T01:34:00.000Z",
                arrivalDate: "2021-12-24T13:34:00.000Z",
                numOfEconomySeatsAvailable: 12,
                numOfBusinessSeatsAvailable: 33,
                numOfFirstClassSeatsAvailable: 44,
                __v: 0,
                basePrice: 10,
                EconomySeatsAvailable: ["32A", "34B", "32C", "30D", "30E"],
                BusinessSeatsAvailable: ["09F", "23E", "08C", "22D"],
                FirstClassSeatsAvailable: ["02A", "01B", "03F"]
            },
        })
    }

    onChooseSeats = e => {
        e.preventDefault();
        this.setState({
            payment: true
        })
    }

    onChangeFlightNumber = e => {
        this.setState({
            flightNumber: e.target.value
        })
    };

    render() {
        return (
            <div>
                {!this.state.flightChoosen && !this.state.payment &&
                    <>
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
                            {this.props.alternativeFlights.map(flight => {
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
                            <form onSubmit={this.onChooseFlight}>
                                <div>
                                    <label>
                                        New Flight Number:
                                        <input type="text" name="name" value={this.state.flightNumber} onChange={this.onChangeFlightNumber} />
                                    </label>
                                </div>
                                <input type="submit" value="Select Flight" />
                            </form>

                        </div>
                    </>
                }
                {this.state.flightChoosen && !this.state.payment &&
                    <>
                        <div>
                            <h1>Choose Seats</h1>
                            <div>
                                <form onSubmit={this.onChooseSeats}>
                                    write seats comma seperated ex: 01A,01B,01E

                                    <div>
                                        <label>
                                            Economy Seats:
                                            <input type="text" name="name" value={this.state.choosenEconomySeats} onChange={this.onChangeEconomySeats} />
                                            choose {this.props.numOfEconomySeats} seat(s) from {this.state.flight.EconomySeatsAvailable.map(res => res + " ,")}
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            Business Seats:
                                            <input type="text" name="name" value={this.state.choosenBusinessSeats} onChange={this.onChangeBusinessSeats} />
                                            choose {this.props.numOfBusinessSeats} seat(s) from {this.state.flight.BusinessSeatsAvailable.map(res => res + " ,")}
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            First-Class Seats:
                                            <input type="text" name="name" value={this.state.choosenFirstClassSeats} onChange={this.onChangeFirstClassSeats} />
                                            choose {this.props.numOfFirstClassSeats} seat(s) from {this.state.flight.FirstClassSeatsAvailable.map(res => res + " ,")}
                                        </label>
                                    </div>


                                    <input type="submit" value="Submit Seats" />
                                </form>
                            </div>
                            <hr />
                            <img src={logo} alt="boeing seats" width="1600" height="550" />
                        </div>
                    </>
                }
                {this.state.payment &&
                    <>
                        <h6> Khamsa raha </h6>
                    </>
                }
            </div>
        )
    }
}
export default selectArr