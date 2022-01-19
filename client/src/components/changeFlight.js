import React from 'react'
import logo from "../BongBoeing.png";
import axios from 'axios'
import Flight from './flight';
class changeFlight extends React.Component {
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
        axios.post("http://localhost:5000/user/changeFlightNumber", {
            flightNumber: this.state.flightNumber,
            reservation: this.props.reservation

        }).then(res => {
            this.setState({
                flightChoosen: true,
                flight: res.data.flight,
            })
        })

    }

    onChooseSeats = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/user/changeFlightSeats", {
            choosenBusinessSeats: this.state.choosenBusinessSeats,
            choosenEconomySeats: this.state.choosenEconomySeats,
            choosenFirstClassSeats: this.state.choosenFirstClassSeats,

        }).then(res => {
            this.setState({
                payment: true
            })
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
                        <div>
                            <br /><br /><br />
                            <div class="loginForm">
                                <h2 class="text-primary"> YOYR FLIGHT </h2>
                                <Flight flight={this.props.flight} user={""} />
                            </div>
                            <br />
                            <div class="loginForm">
                                <h2 class="text-primary">POSSIBLE ALTERNATIVE FLIGHTS</h2>
                            </div>
                            <ul class="ulnodots ulcentre">
                                {this.props.alternativeFlights.map(flight => {
                                    return (
                                        <li key={flight._id}>
                                            <Flight
                                                flight={flight}
                                                user={''}
                                            />
                                        </li>
                                    );
                                })
                                }
                            </ul>
                            <div>
                                <form class="loginForm round2 bgwhite" onSubmit={this.onChooseFlight}>
                                    <fieldset>
                                        <h2 class="text-primary">SELECT AN ALTERNATIVE FLIGHT</h2>
                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label">Flight Number:</label>
                                            <div class="col-sm-10">
                                                <input type="text" value={this.props.flightNumber} onChange={this.props.onChangeFlightNumber} class="form-control" placeholder="Flight number" />
                                            </div>
                                        </div>

                                        <br />
                                        <button type="submit" class="btn btn-primary centre">Select Flight</button>

                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </>
                }
                {this.state.flightChoosen && !this.state.payment &&
                    <>
                        <div class="loginForm">
                            <div>
                                <br /> <br />
                                <form class="signupForm bgwhite" onSubmit={this.onChooseSeats}>
                                    <fieldset>

                                        <h2 class="text-primary">Choose Seats</h2>
                                        write seats comma seperated ex: 01A,01B,01E
                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label"> Economy Seats:</label>
                                            <div class="col-sm-10">
                                                <input type="text" value={this.state.choosenEconomySeats} onChange={this.onChangeEconomySeats} class="form-control" placeholder="Economy Seats" />
                                                choose {this.props.numOfEconomySeats} seat(s) from {this.props.flight.EconomySeatsAvailable.toString()}
                                            </div>
                                        </div>
                                        <br />
                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label">Business Seats:</label>
                                            <div class="col-sm-10">
                                                <input type="text" value={this.state.choosenBusinessSeats} onChange={this.onChangeBusinessSeats} class="form-control" placeholder="Business Seats" />
                                                choose {this.props.numOfBusinessSeats} seat(s) from {this.props.flight.BusinessSeatsAvailable.toString()}
                                            </div>
                                        </div>
                                        <br />
                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label">First-Class Seats:</label>
                                            <div class="col-sm-10">
                                                <input type="text" value={this.state.choosenFirstClassSeats} onChange={this.onChangeFirstClassSeats} class="form-control" placeholder="First-Class Seats" />
                                                choose {this.props.numOfFirstClassSeats} seat(s) from {this.props.flight.FirstClassSeatsAvailable.toString()}
                                            </div>
                                        </div>
                                        <br />
                                        <button type="submit" class="btn btn-primary centre">Choose Seats</button>

                                    </fieldset>
                                </form>
                            </div>
                            <hr />
                        </div>
                        <div class="loginForm">
                            <img src={logo} alt="boeing seats" width="800" height="300" />
                        </div>
                        <br /><br />
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
export default changeFlight