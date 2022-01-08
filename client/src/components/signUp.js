import React from 'react'
// import axios from 'axios'
// import {
//     Link
// } from "react-router-dom";


class signUp extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        firstName: "",
        lastname: "",
        address:"",
        countryCode:"",
        passport: "",
        email: "",
        number: "",
        userName:"",
        password:""
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
    onChangeAddress = e => {
        this.setState({
            address: e.target.value
        })
    };
    onChangeCountryCode = e => {
        this.setState({
            countryCode: e.target.value
        })
    };
    onChangeUserName = e => {
        this.setState({
            userName: e.target.value
        })
    };
    onChangePassword = e => {
        this.setState({
            password: e.target.value
        })
    };
    onChangeNumber = e => {
        this.setState({
            number: e.target.value
        })
    };

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            homeAddress: this.state.address,
            countryCode: this.state.countryCode,
            passport: this.state.passport,
            email: this.state.email,
            telephoneNumber: this.state.number,
            userName: this.state.userName,
            password: this.state.password
        };
        this.props.signUp(newUser);
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
                    
                    <h1> Sign Up </h1>
                    <hr />
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
                                    Address:
                                    <input type="text" name="name" value={this.state.address} onChange={this.onChangeAddress} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Country Code:
                                    <input type="text" name="name" value={this.state.countryCode} onChange={this.onChangeCountryCode} />
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
                            <div>
                                <label>
                                    User Name:
                                    <input type="text" name="name" value={this.state.userName} onChange={this.onChangeUserName} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Password:
                                    <input type="text" name="name" value={this.state.password} onChange={this.onChangePassword} />
                                </label>
                            </div>


                            <input type="submit" value="Sign Up" />
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}
export default signUp