import React from 'react'
import axios from 'axios'
import UserLinks from './userLinks';
<<<<<<< HEAD
import Reservation from './reservation'
//import Booking from '../../../model/bookings';
=======

>>>>>>> 6d6ac5b56d4dc9e0ba3efbd88232d7fcca0ca339


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
<<<<<<< HEAD
=======
    listReservations = () => {
        axios.post('http://localhost:5000/flights/viewreservation'
            , {userToken: this.props.userToken}).then(res => {
                const reservations = res.data;
            this.setState({ reservations:reservations });
            console.log(reservations);
            }
            )
        // axios.get("http://localhost:5000/flights/viewreservation",{userToken: this.props.userToken}).then(res => {
        //     const reservations = res.data;
        //     this.setState({ reservations:reservations });
        //     console.log(reservations);
            
        // });
    };
>>>>>>> 6d6ac5b56d4dc9e0ba3efbd88232d7fcca0ca339
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