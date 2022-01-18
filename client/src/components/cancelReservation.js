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
             axios.post('http://localhost:5000/user/cancelReservation'
                 , { reservationNumber: this.state.reservationNumber }).then(res => {
                 }
                 )
        }
    }
    render() {
        return (
            <div>
                <div>
                    
                    <UserLinks />


                    <hr />
                    <h1>cancel Reservation</h1>

                    <div>
                        <form onSubmit={this.onSubmit}>
                            <div>
                                <label>
                                    Reservation Number:
                                    <input type="text" name="name" value={this.state.reservationNumber} onChange={this.onChangeReservationNumber} />
                                </label>
                            </div>
                            <input type="submit" value="Cancel" />
                        </form>


                    </div>
                </div>

            </div>
        );
    }
}
export default cancelReservation