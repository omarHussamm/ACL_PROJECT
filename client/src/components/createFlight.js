import React from 'react'
import axios from 'axios'
import AdminLinks from './adminLinks';
import {
    Link
} from "react-router-dom";
class createFlight extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        flightNumber: "",
        from: "",
        to: "",
        arrivalDate: "",
        departureDate: "",
        model: "BongBoeing",
        basePrice: "",
        flightCreated: false
    };

    onChangeFrom = e => {
        this.setState({
            from: e.target.value
        })
    };
    onChangeFlightNumber = e => {
        this.setState({
            flightNumber: e.target.value
        })
    };
    onChangeTo = e => {
        this.setState({
            to: e.target.value
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
    onChangeModel = e => {
        this.setState({
            model: e.target.value
        })
    };
    onChangeBasePrice = e => {
        this.setState({
            basePrice: e.target.value
        })
    };


    onSubmit = e => {
        e.preventDefault();
        const flight = {
            from: this.state.from,
            to: this.state.to,
            flightNumber: this.state.flightNumber,
            arrivalDate: this.state.arrivalDate,
            departureDate: this.state.departureDate,
            model: this.state.model,
            basePrice: this.state.basePrice
        };
        console.log(flight);
        axios.post('http://localhost:5000/admin/createFlight'
            , flight).then(res => {
                this.setState({
                    flightCreated: true
                })
            })

    }


    render() {
        return (
            <div>
                <AdminLinks />

                <br />
                <br />

                {this.state.flightCreated && <>
                    <h1>
                            <Link to="/">Flight Created Go back to Home Page</Link>
                        </h1>
                </>}


                {!this.state.flightCreated && <>
                    <form class="loginForm round2 bgwhite" onSubmit={this.onSubmit}>
                        <fieldset>
                            <h2 class="text-primary">CREATE FLIGHT</h2>
                            <br />
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Flight Number:</label>
                                <div class="col-sm-10">
                                    <input type="text" value={this.state.flightNumber} onChange={this.onChangeFlightNumber} class="form-control" placeholder="Flight Number" />
                                </div>
                            </div>
                            <br />
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">From:</label>
                                <div class="col-sm-10">
                                    <input type="text" value={this.state.from} onChange={this.onChangeFrom} class="form-control" placeholder="From" />
                                </div>
                            </div>
                            <br />
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">To:</label>
                                <div class="col-sm-10">
                                    <input type="text" value={this.state.to} onChange={this.onChangeTo} class="form-control" placeholder="To" />
                                </div>
                            </div>
                            <br />
                            <div class="form-group row nativeDateTimePicker">
                                <label class="col-sm-2 col-form-label">Departure Date:</label>
                                <div class="col-sm-10">
                                    <input type="datetime-local" value={this.state.departureDate} onChange={this.onChangeDepartureDate} class="form-control" />
                                </div>
                            </div>
                            <br />
                            <div class="form-group row nativeDateTimePicker">
                                <label class="col-sm-2 col-form-label">Arrival Date:</label>
                                <div class="col-sm-10">
                                    <input type="datetime-local" value={this.state.arrivalDate} onChange={this.onChangeArrivalDate} class="form-control" />
                                </div>
                            </div>
                            <br />
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Base Price:</label>
                                <div class="col-sm-10">
                                    <input type="text" value={this.state.basePrice} onChange={this.onChangeBasePrice} class="form-control" placeholder="Base Price" />
                                </div>
                            </div>
                            <br />
                            <div class="form-group row input-group">
                                <label class="col-sm-2 col-form-label">Airplane Model:</label>
                                <div class="col-sm-10">
                                    <select class="form-select" onChange={this.onChangeModel}>
                                        <option disabled>Choose...</option>
                                        <option Selected value="BongBoeing">BongBoeing</option>
                                    </select>
                                </div>
                            </div>
                            <br />
                            <button type="submit" class="btn btn-primary centre">Creat Flight</button>

                        </fieldset>
                    </form>
                </>}
            </div>
        )
    }


}

export default createFlight
