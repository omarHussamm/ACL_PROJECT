import React from 'react'
import axios from 'axios'
import UserLinks from './userLinks';
//import Booking from '../../../model/bookings';


class viewReservation extends React.Component {

    state = {
        reservations: []
    }

    componentDidMount = () => {
        //get reservations
        console.log("get reservations");
        axios.get("http://localhost:5000/user/reservations").then(res => {
            const reservations = res.data;
            this.setState({ reservations: reservations });
        });
    }
    listReservations = () => {
        axios.get("http://localhost:5000/flights/viewreservation").then(res => {
            const reservations = res.data;
            this.setState({ reservations:reservations });
            console.log(reservations);
            
        });
    };
    render() {
        return (
            <div>
                
                <div>
                    
                    <UserLinks />
                    


                    <hr />
                    <h1> viewReservation </h1>
                    <button onClick={this.listReservations}>
                    Show All Reservations
                </button>
                {/* <ul class="list-group">
                {this.state.reservations.map(booking => {
                        return (
                            <li key={flight._id}>
                                <Booking booking={flight} />
                            </li>

                        );

                    })
                    }
                </ul> */}
                    {/* { <table>
                        <tr>
                            <th>Reservation Number</th>
                            <th>Departure Flight Number</th>
                            <th>Arrival Flight Number</th>
                            <th>User ID</th>
                            <th>Price</th>
                            <th>Arrival Economy Seats</th>
                            <th>Arrival Business Seats</th>
                            <th>Arrival First Class Seats</th>
                            <th>Departure Economy Seats</th>
                            <th>Departure Business Seats</th>
                            <th>Departure First Class Seats</th>
                        </tr>

                        {this.state.reservations.map(reservation => {
                            return (
                                <tr>
                                    <td>{Booking.reservationNum}</td>
                                    <td>{flight.from}</td>
                                    <td>{flight.to}</td>
                                    <td>{flight.arrivalDate}</td>
                                    <td>{flight.departureDate}</td>
                                    <td>{flight.numOfEconomySeatsAvailable}</td>
                                    <td>{flight.numOfBusinessSeatsAvailable}</td>
                                    <td>{flight.numOfFirstClassSeatsAvailable}</td>
                                    <td>{flight.basePrice}</td>
                                </tr>
                            )
                        })}
                    </table> */}

                </div>

            </div>
        );
    }
}
export default viewReservation