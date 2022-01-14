import React from 'react'
import axios from 'axios'
import AdminLinks from './adminLinks';
import DeleteQuery from './deleteQuery'
import UpdateQuery from './updateQuery'
import Flight from './flight'

class searchFlights extends React.Component {
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
        flights: [],
        update: false,
        delete: false,
        flight: {}
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
    onChangeFlightNumber = e => {
        this.setState({
            flightNumber: e.target.value
        })
    };
    onChangeDepartureDate = e => {
        this.setState({
            departureDate: e.target.value
        })
    };

    onUpdate = (e, flight) => {
        e.preventDefault();
        this.setState({
            flight: flight,
            update: true
        })

    }

    onDelete = (e, flight) => {
        e.preventDefault();
        this.setState({
            flight: flight,
            delete: true
        })

    }

    onSubmit = e => {
        e.preventDefault();

        const flight = {
            from: this.state.from,
            to: this.state.to,
            arrivalDate: this.state.arrivalDate,
            departureDate: this.state.departureDate,
            flightNumber: this.state.flightNumber
        };
        axios.post('http://localhost:5000/flights/searchFlight'
            , flight).then(res => {
                this.setState({ flights: res.data })
            }
            )
    }


    render() {
        return (
            <div>
                <AdminLinks />


                {this.state.update &&
                    <>
                        <UpdateQuery flight={this.state.flight} />
                    </>
                }

                {this.state.delete &&
                    <>
                        <DeleteQuery flight={this.state.flight} />
                    </>
                }




                {!this.state.update && !this.state.delete &&
                    <>
                        <br /><br />
                        <form class="row row-cols-lg-auto g-3 align-items-center bgwhite2 round3" onSubmit={this.onSubmit}>
                            <div class="col-12">
                                <label >
                                    Flight Number:
                                    <input type="text" name="name" class="form-control widthsmol" value={this.state.flightNumber} onChange={this.onChangeFlightNumber} />
                                </label>
                            </div>
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
                                            user={'admin'}
                                            onUpdate={this.onUpdate}
                                            onDelete={this.onDelete}
                                        />
                                    </li>
                                );
                            })
                            }
                        </ul>
                    </>}

            </div>
        )
    }


}

export default searchFlights