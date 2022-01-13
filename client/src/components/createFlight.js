import React from 'react'
import axios from 'axios'
import AdminLinks from './adminLinks';
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
        model:"BongBoeing",
        basePrice: ""
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
            model:this.state.model,
            basePrice: this.state.basePrice
        };
        console.log(flight);
        axios.post('http://localhost:5000/admin/createFlight'
            , flight)

    }


    render() {
        return (
            <div>
                <AdminLinks />

                <hr />

                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>
                            Flight Number:
                            <input type="text" name="name" value={this.state.flightNumber} onChange={this.onChangeFlightNumber} />
                        </label>
                    </div>
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
                    <div>
                            <span class="input-group mb-3">
                                <label class="input-group-text" for="inputGroupSelect01">Airplane Model:</label>
                                <select class="form-select" id="inputGroupSelect01" onChange={this.onChangeModel}>
                                    <option disabled>Choose...</option>
                                    <option Selected value="BongBoeing">BongBoeing</option>
                                </select>
                            </span>
                    </div>
                    <div>
                        <label>
                            Base Price:
                            <input type="text" name="name" value={this.state.basePrice} onChange={this.onChangeBasePrice} />
                        </label>
                    </div>
                    <input type="submit" value="Create Flight" />
                </form>
            </div>
        )
    }


}

export default createFlight
