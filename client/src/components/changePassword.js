import React from 'react'
// import axios from 'axios'
import {
    Link
} from "react-router-dom";


class changePassword extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        oldPassword: "",
        newPassword: "",
    };

    onChangeOldPassword = e => {
        this.setState({
            oldPassword: e.target.value
        })
    };

    onChangeNewPassword = e => {
        this.setState({
            newPassword: e.target.value
        })
    };
  

    onSubmit = e => {
        e.preventDefault();

        
        // axios.post('http://localhost:5000/flights/searchFlight'
        //     , newProfile).then(res => {
        //         this.setState({ flights: res.data })
        //     }
        //     )
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
                    <h1> Change Password </h1>

                    <div>
                        <form onSubmit={this.onSubmit}>

                            <div>
                                <label>
                                    Old Password:
                                    <input type="text" name="name" value={this.state.oldPassword} onChange={this.onChangeOldPassword} />
                                </label>
                            </div>
                            <div>
                                <label>
                                   New Password:
                                    <input type="text" name="name" value={this.state.newPassword} onChange={this.onChangeNewPassword} />
                                </label>
                            </div>
                            
                            <input type="submit" value="Change Password" />
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}
export default changePassword