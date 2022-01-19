import React from 'react'
import Flight from './flight'
import ChangeSeat from './changeSeat'
import ChangeFlight from './changeFlight'
import axios from 'axios';
import UserLinks from './userLinks';


class editReservation extends React.Component {


    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        reservationNumber: "",
        noAction: true,
        edit: false,
        reservation: "",
        changeDepartureSeats: false,
        changeDepartureFlight: false,
        changeArrivalSeats: false,
        changeArrivalFlight: false,
        alternativeFlights: "",

    };

    onChangeReservationNumber = e => {
        this.setState({
            reservationNumber: e.target.value
        })
    };

    changeDepartureSeats = () => {
        this.setState({
            edit: false,
            changeDepartureSeats: true
        })
    }

    changeDepartureFlight = () => {
        this.setState({
            edit: false,
            changeDepartureFlight: true,
            alternativeFlights: [
                {
                    flightNumber: 1213,
                    from: "sad",
                    to: "happy",
                    departureDate: "2021-12-24T01:34:00.000Z",
                    arrivalDate: "2021-12-24T13:34:00.000Z",
                    numOfEconomySeatsAvailable: 12,
                    numOfBusinessSeatsAvailable: 33,
                    numOfFirstClassSeatsAvailable: 44,
                    __v: 0,
                    basePrice: 10,
                },
            ]

        })
    }

    changeArrivalSeats = () => {
        this.setState({
            edit: false,
            changeArrivalSeats: true
        })
    }

    changeArrivalFlight = () => {

        this.setState({
            edit: false,
            changeArrivalFlight: true,
            alternativeFlights: [
                {
                    flightNumber: 1213,
                    from: "sad",
                    to: "happy",
                    departureDate: "2021-12-24T01:34:00.000Z",
                    arrivalDate: "2021-12-24T13:34:00.000Z",
                    numOfEconomySeatsAvailable: 12,
                    numOfBusinessSeatsAvailable: 33,
                    numOfFirstClassSeatsAvailable: 44,
                    __v: 0,
                    basePrice: 10,
                },
            ]
        })
    }

    onSubmit = e => {
        e.preventDefault();

        axios.post("http://localhost:5000/user/editReservation").then(res => {
            this.setState({
                noAction: false,
                edit: true,
                reservation: res.data.reservation,
                departureFlight: res.data.departureFlight,
                arrivalFlight: res.data.arrivalFlight
            })
        });
    }
    render() {
        return (
            <div>
                <div>

                    <UserLinks />

                    {this.state.noAction &&
                        <form class="loginForm round2 bgwhite center" onSubmit={this.onSubmit}>
                            <fieldset>
                                <h2 class="text-primary">Edit Resrervation</h2>
                                <br />
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Reservation Number:</label>
                                    <div class="col-sm-10">
                                        <input type="text" value={this.state.reservationNumber} onChange={this.onChangeReservationNumber} class="form-control" placeholder="Reservation number to be edited" />
                                    </div>
                                </div>

                                <br />
                                <button type="submit" class="btn btn-primary centre">Choose Reservations</button>

                            </fieldset>
                        </form>
                    }
                    {this.state.edit &&
                        <div><br /><br />
                            <div class="loginForm">
                                <h2 class="text-primary">Departure Flight</h2>
                                <p>Economy Seat(s): {this.state.reservation.depEconomySeats.toString()}</p>
                                <p>Business Seat(s): {this.state.reservation.depBusinessSeats.toString()}</p>
                                <p>First-Class Seat(s): {this.state.reservation.depFirstClassSeats.toString()}</p>
                                <div class="row">
                                    <div class="col-auto me-auto"> <button class="btn btn-primary" onClick={this.changeDepartureSeats}>Change Seats</button></div>
                                    <div class="col-auto">  <button class="btn btn-primary" onClick={this.changeDepartureFlight}>Change Flight</button></div>
                                </div>
                                <br />
                                <Flight user="" flight={this.state.departureFlight} />
                            </div>


                            <hr />
                            <div class="loginForm">
                                <h2 class="text-primary" >Return Flight</h2>
                                <p>Economy Seat(s): {this.state.reservation.arrEconomySeats.toString()}</p>
                                <p>Business Seat(s): {this.state.reservation.arrBusinessSeats.toString()}</p>
                                <p>First-Class Seat(s): {this.state.reservation.arrFirstClassSeats.toString()}</p>
                                <div class="row">
                                    <div class="col-auto me-auto">  <button class="btn btn-primary" onClick={this.changeArrivalSeats}>Change Seats</button></div>
                                    <div class="col-auto"> <button class="btn btn-primary" onClick={this.changeArrivalFlight}>Change Flight</button></div>
                                </div>
                                <br />
                                <Flight user="" flight={this.state.arrivalFlight} />
                            </div>
                        </div>}

                    {this.state.changeDepartureSeats &&
                        <>
                            <ChangeSeat
                                reservedEconomySeats={this.state.reservation.depEconomySeats.toString()}
                                reservedBusinessSeats={this.state.reservation.depBusinessSeats.toString()}
                                reservedFirstClassSeats={this.state.reservation.depFirstClassSeats.toString()}
                                flight={this.state.departureFlight}
                                reservation={this.state.reservation}
                            />
                        </>
                    }
                    {this.state.changeDepartureFlight &&
                        <>
                            <ChangeFlight
                                alternativeFlights={this.state.alternativeFlights}
                                numOfEconomySeats={2}
                                numOfBusinessSeats={1}
                                numOfFirstClassSeats={0}
                                reservation={this.state.reservation}
                            />
                        </>
                    }
                    {this.state.changeArrivalSeats &&
                        <>
                            <ChangeSeat
                                reservedEconomySeats={this.state.reservation.arrEconomySeats.toString()}
                                reservedBusinessSeats={this.state.reservation.arrBusinessSeats.toString()}
                                reservedFirstClassSeats={this.state.reservation.arrFirstClassSeats.toString()}
                                flight={this.state.arrivalFlight}
                                reservation={this.state.reservation}
                            />
                        </>
                    }
                    {this.state.changeArrivalFlight &&
                        <>
                            <ChangeFlight
                                alternativeFlights={this.state.alternativeFlights}
                                numOfEconomySeats={2}
                                numOfBusinessSeats={1}
                                numOfFirstClassSeats={0}
                                reservation={this.state.reservation}
                            />
                        </>
                    }
                </div>

            </div>
        );
    }
}
export default editReservation