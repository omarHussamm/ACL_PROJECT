import React from 'react'
import Flight from './flight'
import ChangeSeat from './changeSeat'
import ChangeFlight from './changeFlight'
import {
    Link
} from "react-router-dom";


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
        this.setState({
            noAction: false,
            edit: true,
            reservation: {
                depFlightNumber: 1
                ,
                arrFlightNumber: 2
                ,
                Price: 55,
                arrEconomySeats: ['11F', '11E']
                ,
                arrBusinessSeats: ['7F']
                ,
                arrFirstClassSeats: []
                ,
                depEconomySeats: ['11F', '11E']
                ,
                depBusinessSeats: ['7F']
                ,
                depFirstClassSeats: []
            },
            departureFlight: {
                flightNumber: 1211,
                from: "happy",
                to: "sad",
                departureDate: "2021-12-18T01:34:57.000Z",
                arrivalDate: "2021-12-18T01:34:57.000Z",
                numOfEconomySeatsAvailable: 12,
                numOfBusinessSeatsAvailable: 33,
                numOfFirstClassSeatsAvailable: 44,
                __v: 0,
                basePrice: 12,
                EconomySeatsAvailable: ["34A", "34B", "34C", "30D", "30E"],
                BusinessSeatsAvailable: ["07F", "07E", "08C", "22D"],
                FirstClassSeatsAvailable: ["01A", "01E", "03B"]
            },
            arrivalFlight: {
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
            }
        })

    }
    render() {
        return (
            <div>
                <div>
                    <ul>
                        <li>
                            <Link to="/editProfile">Edit Profile</Link>
                        </li>
                        <li>
                            <Link to="/viewReservation">View Reservations</Link>
                        </li>
                        <li>
                            <Link to="/cancelReservation">Cancel Reservations</Link>
                        </li>
                        <li>
                            <Link to="/searchFlights2">Search for Flights</Link>
                        </li>
                        <li>
                            <Link to="/selectFlight">Select Flight</Link>
                        </li>
                        <li>
                            <Link to="/changePassword">Change Password</Link>
                        </li>
                    </ul>


                    <hr />
                    <h1>Edit Reservation</h1>
                    <hr />
                    {this.state.noAction &&


                        <div>
                            <form onSubmit={this.onSubmit}>
                                <div>
                                    <label>
                                        Reservation Number:
                                        <input type="text" name="name" value={this.state.reservationNumber} onChange={this.onChangeReservationNumber} />
                                    </label>
                                </div>
                                <input type="submit" value="Edit" />
                            </form>


                        </div>}
                    {this.state.edit &&
                        <div>
                            <h2>Departure Flight</h2>
                            <p>Economy Seat(s): {this.state.reservation.depEconomySeats.toString()}</p>
                            <p>Business Seat(s): {this.state.reservation.depBusinessSeats.toString()}</p>
                            <p>First-Class Seat(s): {this.state.reservation.depFirstClassSeats.toString()}</p>
                            <button onClick={this.changeDepartureSeats}>Change Seats</button>
                            <button onClick={this.changeDepartureFlight}>Change Flight</button>
                            <Flight user="user" flight={this.state.departureFlight} />

                            <hr />
                            <h2>Return Flight</h2>
                            <p>Economy Seat(s): {this.state.reservation.arrEconomySeats.toString()}</p>
                            <p>Business Seat(s): {this.state.reservation.arrBusinessSeats.toString()}</p>
                            <p>First-Class Seat(s): {this.state.reservation.arrFirstClassSeats.toString()}</p>
                            <button onClick={this.changeArrivalSeats}>Change Seats</button>
                            <button onClick={this.changeArrivalFlight}>Change Flight</button>
                            <Flight user="user" flight={this.state.arrivalFlight} />
                        </div>}

                    {this.state.changeDepartureSeats &&
                        <>
                            <ChangeSeat
                                reservedEconomySeats={this.state.reservation.depEconomySeats.toString()}
                                reservedBusinessSeats={this.state.reservation.depBusinessSeats.toString()}
                                reservedFirstClassSeats={this.state.reservation.depFirstClassSeats.toString()}
                                flight={this.state.departureFlight}
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
                            />
                        </>
                    }
                </div>

            </div>
        );
    }
}
export default editReservation