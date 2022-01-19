import React from 'react'
import axios from 'axios'
import logo from "../BongBoeing.png";
import {
    Link
} from "react-router-dom";
class changeSeat extends React.Component {
    state = {
        oldSeat: "",
        newSeat: "",
        change: false,
        success: false
    }
    onChangeOldSeat = e => {
        this.setState({
            oldSeat: e.target.value
        })
    };

    onChangeNewSeat = e => {
        this.setState({
            newSeat: e.target.value
        })
    };

    onSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/user/changeSeat", {
            oldSeat: this.state.oldSeat,
            newSeat: this.state.newSeat,
            reservation: this.props.reservation,

        }).then(res => {
            this.setState({
                change: true,
            })
        })
    }

    render() {
        return (
            <>
                {this.state.change &&
                    <>
                        {!this.state.success &&
                            <>
                                <h1>
                                    <Link to="/">Change Failed Go back to Home Page</Link>
                                </h1>
                            </>
                        }

                        {this.state.success &&
                            <>
                                <h1>
                                    <Link to="/">Change Done Go back to Home Page</Link>
                                </h1>
                            </>
                        }

                    </>
                }


                {!this.state.change && <div>
                    <br />
                    <br />
                    <div class="loginForm">
                        <h3 class="text-primary">Your Seats</h3>
                        <p>Economy Seat(s): {this.props.reservedEconomySeats.toString()}</p>
                        <p>Business Seat(s): {this.props.reservedBusinessSeats.toString()}</p>
                        <p>First-Class Seat(s): {this.props.reservedFirstClassSeats.toString()}</p>
                        <hr />
                        <h3 class="text-primary">Available Seats</h3>
                        <p>Economy Seat(s): {this.props.flight.EconomySeatsAvailable.toString()}</p>
                        <p>Business Seat(s): {this.props.flight.BusinessSeatsAvailable.toString()}</p>
                        <p>First-Class Seat(s): {this.props.flight.FirstClassSeatsAvailable.toString()}</p>

                        <hr />

                        <form class="signupForm bgwhite" onSubmit={this.onSubmit}>
                            <fieldset>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">
                                        Old Seat:</label>
                                    <div class="col-sm-10">
                                        <input type="text" name="name" value={this.state.oldSeat} class="form-control" placeholder="Old Seat" onChange={this.onChangeOldSeat} />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">
                                        New Seat:</label>
                                    <div class="col-sm-10">
                                        <input type="text" name="name" value={this.state.newSeat} class="form-control" placeholder="New Seat" onChange={this.onChangeNewSeat} />
                                    </div>
                                </div>
                                <input type="submit" class="btn btn-primary centre" value="Submit" />
                                <br />
                            </fieldset>
                        </form>
                        <hr />
                        <div class="loginForm">
                            <img src={logo} alt="boeing seats" width="800" height="300" />
                        </div>
                        <br /><br />
                    </div>

                </div>}
            </>
        )
    }
}
export default changeSeat