import React from 'react'
import axios from 'axios'
import Flight from './flight';
import {
    Link
} from "react-router-dom";

class updateQuery extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        done: false,
        flightNumber: "",
        arrivalDate: "",
        departureDate: "",
    };

    onChangeFlightNumber = e => {
        this.setState({
            flightNumber: e.target.value
        })
    };
    onChangeArrivalDate = e => {
        this.setState({
            arrivalDate: e.target.value
        })
    };
    onChangeDepartureDate = e => {
        this.setState({
            departureDate: e.target.value
        })
    };


    onSubmit = e => {
        e.preventDefault();
        const updatedflight = {
            oldFlightNumber: this.props.flight.flightNumber,
            flightNumber: this.state.flightNumber,
            arrivalDate: this.state.arrivalDate,
            departureDate: this.state.departureDate,
        };
        axios.post('http://localhost:5000/admin/updateFlight'
            , updatedflight).then(res => {
                this.setState({
                    done: true
                })
            }
            )
    }
    render() {
        return (
            <div>
                {this.state.done &&
                    <>
                        <h1>
                            <Link to="/">Update Done Go back to Home Page</Link>
                        </h1>
                    </>
                }
                {!this.state.done &&
                    <>
                        <br /><br /><br />
                        <div class="loginForm">
                            <Flight flight={this.props.flight} user={""} />
                        </div>
                        <br />
                        <form class="loginForm round2 bgwhite" onSubmit={this.onSubmit}>
                            <fieldset>
                                <h2 class="text-primary">UPDATE FLIGHT</h2>
                                <br />
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label" >
                                        Flight Number:
                                    </label>
                                    <div class="col-sm-10">
                                        <input type="text" name="name" class="form-control" value={this.state.flightNumber} onChange={this.onChangeFlightNumber} />
                                    </div>
                                </div>
                                <br />
                                <div class="form-group row nativeDateTimePicker">
                                    <label class="col-sm-2 col-form-label">
                                        Departure Date:
                                    </label>
                                    <div class="col-sm-10">
                                        <input type="datetime-local" class="form-control" id="party" name="bday" value={this.state.departureDate} onChange={this.onChangeDepartureDate} />

                                    </div>

                                </div>
                                <br />
                                <div class="form-group row nativeDateTimePicker">
                                    <label class="col-sm-2 col-form-label">
                                        Arrival Date:
                                    </label>
                                    <div class="col-sm-10">
                                        <input type="datetime-local" class="form-control" id="party" name="bday" value={this.state.arrivalDate} onChange={this.onChangeArrivalDate} />
                                    </div>

                                </div>
                                <br />
                                <div class="form-group row">
                                    <input type="submit" class="btn btn-primary" value="Update" />
                                </div>
                            </fieldset>
                        </form>
                    </>}
            </div>
        )
    }
}

export default updateQuery