import React from 'react'
// import axios from 'axios'
import {
    Link
} from "react-router-dom";


class editProfile extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        firstName: "",
        lastname: "",
        passport: "",
        email: "",
        number: ""
    };

    onChangeFirstName = e => {
        this.setState({
            firstName: e.target.value
        })
    };

    onChangeLastName = e => {
        this.setState({
            lastname: e.target.value
        })
    };
    onChangePassport = e => {
        this.setState({
            passport: e.target.value
        })
    };
    onChangeEmail = e => {
        this.setState({
            email: e.target.value
        })
    };
    onChangeNumber = e => {
        this.setState({
            number: e.target.value
        })
    };

    onSubmit = e => {
        e.preventDefault();

        const newProfile = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            passport: this.state.passport,
            email: this.state.email,
            number: this.state.number,
        };
        console.log(newProfile);
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
                            <Link to="/editReservation">Edit Reservation</Link>
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
                    <h1> editProfile </h1>

                    <div>
                        <form onSubmit={this.onSubmit}>

                            <div>
                                <label>
                                    First Name:
                                    <input type="text" name="name" value={this.state.firstName} onChange={this.onChangeFirstName} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Last Name:
                                    <input type="text" name="name" value={this.state.lastName} onChange={this.onChangeLastName} />
                                </label>
                            </div>
                            <div>

                                <label>
                                    Passport Number:
                                    <input type="text" name="name" value={this.state.passport} onChange={this.onChangePassport} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Phone Number:
                                    <input type="text" name="name" value={this.state.email} onChange={this.onChangeEmail} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Email:
                                    <input type="text" name="name" value={this.state.number} onChange={this.onChangeNumber} />
                                </label>
                            </div>


                            <input type="submit" value="Search" />
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}
export default editProfile