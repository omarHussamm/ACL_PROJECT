import React from 'react'
import axios from 'axios'
import UserLinks from './userLinks';
import Reservation from './reservation'
//import Booking from '../../../model/bookings';


class viewReservation extends React.Component {

    state = {
        reservations: [],
        mounted: false
    }

    componentDidMount = () => {
        //get reservations
        console.log("get reservations");
        axios.post("http://localhost:5000/user/viewreservation", { userToken: this.props.userToken }).then(res => {
            const reservations = res.data;
            this.setState({
                reservations: reservations,
                mounted: true
            });
        });
    }
    render() {
        return (
            <div>


                <UserLinks />



                {!this.state.mounted &&
                    <h1>Loading...</h1>
                }

                {this.state.mounted &&
                    <>
                        <br />
                        <ul class="ulnodots ulcentre">
                            {this.state.reservations.map(flight => {
                                return (
                                    <li key={flight._id}>
                                        <Reservation
                                            reservation={flight}
                                        />
                                    </li>
                                );
                            })
                            }
                        </ul>
                    </>}

            </div >
        );
    }
}
export default viewReservation