import React from 'react'
import axios from 'axios'
import Flight from './flight';
import GuestUserLinks from './guestUserLinks';
class searchFlights2 extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        from: "",
        to: "",
        arrivalDate: "",
        departureDate: "",
        flights: [],
        numOfBusinessSeatsAvailable: "",
        numOfEconomySeatsAvailable: "",
        numOfFirstClassSeatsAvailable: ""
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
    onChangeArrivalDate = e => {
        this.setState({
            arrivalDate: e.target.value
        })
    };
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
    onChangeDepartureDate = e => {
        this.setState({
            departureDate: e.target.value
        })
    };


    onSubmit = e => {
        e.preventDefault();

        const flight = {
            from: this.state.from,
            to: this.state.to,
            arrivalDate: this.state.arrivalDate,
            departureDate: this.state.departureDate,
            numOfBusinessSeatsAvailable: this.state.numOfBusinessSeatsAvailable,
            numOfEconomySeatsAvailable: this.state.numOfEconomySeatsAvailable,
            numOfFirstClassSeatsAvailable: this.state.numOfFirstClassSeatsAvailable
        };
        axios.post('http://localhost:5000/userGuest/search'
            , flight).then(res => {
                this.setState({ flights: res.data })
            }
            )
    }


    render() {
        return (
            <div>

                <GuestUserLinks userToken={this.props.userToken} />

                <div>
                    <>
                        <br /><br />
                        <form class="row row-cols-lg-auto g-3 align-items-center bgwhite2 round3" onSubmit={this.onSubmit}>
                            <div class="col-12">
                                <label>
                                    from:
                                    <input type="text" name="name" class="form-control widthsmol" value={this.state.from} onChange={this.onChangeFrom} />
                                </label>
                            </div>
                            <div class="col-12">
                                <label>
                                    to:
                                    <input type="text" name="name" class="form-control widthsmol" value={this.state.to} onChange={this.onChangeTo} />
                                </label>
                            </div>
                            <div class="col-12">
                                <label>
                                    Departure Date:
                                    <form>
                                        <div class="nativeDateTimePicker">
                                            <input type="datetime-local" class="form-control widthsmol" id="party" name="bday" value={this.state.departureDate} onChange={this.onChangeDepartureDate} />

                                        </div>
                                    </form>
                                </label>
                            </div>
                            <div class="col-12">
                                <label>
                                    Arrival Date:
                                    <form>
                                        <div class="nativeDateTimePicker">
                                            <input type="datetime-local" class="form-control widthsmol" id="party" name="bday" value={this.state.arrivalDate} onChange={this.onChangeArrivalDate} />


                                        </div>
                                    </form>
                                </label>
                            </div>
                            <div class="col-12">
                            <label>
                                Economy Seats:
                                <input type="text" name="name" class="form-control widthsmol" value={this.state.numOfEconomySeatsAvailable} onChange={this.onChangenumOfEconomySeatsAvailable} />
                            </label>
                        </div>
                        <div class="col-12">
                            <label>
                                Business Seats:
                                <input type="text" name="name" class="form-control widthsmol" value={this.state.numOfBusinessSeatsAvailable} onChange={this.onChangenumOfBusinessSeatsAvailable} />
                            </label>
                        </div>
                        <div class="col-12">
                            <label>
                                First-Class Seats:
                                <input type="text" name="name" class="form-control widthsmol" value={this.state.numOfFirstClassSeatsAvailable} onChange={this.onChangenumOfFirstClassSeatsAvailable} />
                            </label>
                        </div>

                            <div class="col-12">
                                <input type="submit" class="btn btn-primary" value="Search" />
                            </div>
                        </form>


                        <br /><br /><br />
                        <ul class="ulnodots ulcentre">
                            {this.state.flights.map(flight => {
                                return (
                                    <li key={flight._id}>
                                        <Flight
                                            flight={flight}
                                            user={'user'}
                                        />
                                    </li>
                                );
                            })
                            }
                        </ul>
                    </>
                </div>

            </div>
        )
    }


}

export default searchFlights2