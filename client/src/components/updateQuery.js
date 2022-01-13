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
                        <hr />
                        <Flight flight={this.props.flight} user={""} />
                        <form onSubmit={this.onSubmit}>
                            <div>
                                <label>
                                    Flight Number:
                                    <input type="text" name="name" value={this.state.flightNumber} onChange={this.onChangeFlightNumber} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Departure Date:
                                    <form>
                                        <div class="nativeDateTimePicker">
                                            <input type="datetime-local" id="party" name="bday" value={this.state.departureDate} onChange={this.onChangeDepartureDate} />
                                            <span class="validity"></span>

                                        </div>
                                    </form>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Arrival Date:
                                    <form>
                                        <div class="nativeDateTimePicker">
                                            <input type="datetime-local" id="party" name="bday" value={this.state.arrivalDate} onChange={this.onChangeArrivalDate} />
                                            <span class="validity"></span>

                                        </div>
                                    </form>
                                </label>
                            </div>
                            <input type="submit" value="Update" />
                        </form>
                    </>}
            </div>
        )
    }
}

export default updateQuery