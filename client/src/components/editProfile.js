import React from 'react'
import axios from 'axios'
import UserLinkes from './userLinks'


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
        axios.post('http://localhost:5000/user/editProfile'
            , newProfile)
    }
    render() {
        return (
            <div>
                <div>

                    <UserLinkes />

                    <div>
                        <br />
                        <br />
                        <br />
                        <form class="signupForm bgwhite" onSubmit={this.onSubmit}>
                            <fieldset>
                                <h2 class="text-primary">EDIT PROFILE</h2>
                                <br />
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">First Name:</label>
                                    <div class="col-sm-10">
                                        <input type="text" value={this.state.firstName} onChange={this.onChangeFirstName} class="form-control" placeholder=" First Name" />
                                    </div>
                                </div>
                                <br />
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Last Name:</label>
                                    <div class="col-sm-10">
                                        <input type="text" value={this.state.lastName} onChange={this.onChangeLastName} class="form-control" placeholder="Last Name" />
                                    </div>
                                </div>
                                <br />
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Passport Number:</label>
                                    <div class="col-sm-10">
                                        <input type="text" value={this.state.passport} onChange={this.onChangePassport} class="form-control" placeholder="Passport Number" />
                                    </div>
                                </div>
                                <br />
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Phone Number:</label>
                                    <div class="col-sm-10">
                                        <input type="text" value={this.state.number} onChange={this.onChangeNumber} class="form-control" placeholder="Phone Number" />
                                    </div>
                                </div>
                                <br />
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Email:</label>
                                    <div class="col-sm-10">
                                        <input type="text" value={this.state.email} onChange={this.onChangeEmail} class="form-control" placeholder="Email" />
                                    </div>
                                </div>
                                <br />
                                <button type="submit" class="btn btn-primary centre">Edit Profile</button>

                            </fieldset>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}
export default editProfile