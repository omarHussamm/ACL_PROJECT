import React from 'react'
import axios from 'axios'
import UserLinks from './userLinks';


class cancelReservation extends React.Component {


    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        reservationNumber: ""
    };

    onChangeReservationNumber = e => {
        this.setState({
            reservationNumber: e.target.value
        })
    };

    onSubmit = e => {
        e.preventDefault();

        if (window.confirm("Are you sure you want to cancel?")) {
<<<<<<< HEAD
            axios.post('http://localhost:5000/user/cancelReservation'
                , {
                    reservationNumber: this.state.reservationNumber,
                    userToken: this.props.userToken
                }).then(res => {
                }
                )
=======
             axios.post('http://localhost:5000/user/cancelReservation'
                 , { reservationNumber: this.state.reservationNumber ,
                userToken: this.props.userToken}).then(res => {
                 }
                 )
>>>>>>> 6d6ac5b56d4dc9e0ba3efbd88232d7fcca0ca339
        }
    }
    render() {
        return (
            <div>
                <div>

                    <UserLinks />

                    <div>
                        <form class="loginForm round2 bgwhite center" onSubmit={this.onSubmit}>
                            <fieldset>
                                <h2 class="text-primary">CANCEL RESERVATION</h2>
                                <br />
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label"> Reservation Number:</label>
                                    <div class="col-sm-10">
                                        <input type="text" value={this.state.reservationNumber} onChange={this.onChangeReservationNumber} class="form-control" placeholder="Reservation number to be canceled" />
                                    </div>
                                </div>

                                <br />
                                <button type="submit" class="btn btn-primary centre">Cancel Reservation</button>

                            </fieldset>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}
export default cancelReservation