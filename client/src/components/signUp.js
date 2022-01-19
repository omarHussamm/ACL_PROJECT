import React from 'react'
import axios from 'axios'


class signUp extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        firstName: "",
        lastName: "",
        address: "",
        countryCode: "",
        passport: "",
        email: "",
        number: "",
        userName: "",
        password: "",
        validationMessage:""
    };

    onChangeFirstName = e => {
        this.setState({
            firstName: e.target.value
        })
    };

    onChangelastName = e => {
        this.setState({
            lastName: e.target.value
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

        axios.post('http://localhost:5000/userGuest/signup'
            , { newUser: newUser });
        // this.props.signUp(newUser);
    }
    render() {
        return (
            <div>
                <br/><br/><br/>
                <form class="signupForm bgwhite" onSubmit={this.onSubmit}>
                        <fieldset>
                            <h2 class="text-primary">SIGN UP</h2>
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
                                    <input type="text" value={this.state.lastName} onChange={this.onChangelastName} class="form-control" placeholder="Last Name" />
                                </div>
                            </div>
                            <br />
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Address:</label>
                                <div class="col-sm-10">
                                    <input type="text" value={this.state.address} onChange={this.onChangeAddress} class="form-control" placeholder="Address" />
                                </div>
                            </div>
                            <br />
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Country Code:</label>
                                <div class="col-sm-10">
                                    <input type="text" value={this.state.countryCode} onChange={this.onChangeCountryCode} class="form-control" placeholder="Country Code" />
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
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">UserName:</label>
                                <div class="col-sm-10">
                                    <input type="text" value={this.state.userName} onChange={this.onChangeUserName} class="form-control" placeholder="UserName" />
                                </div>
                            </div>
                            <br />
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Password:</label>
                                <div class="col-sm-10">
                                    <input type="text" value={this.state.password} onChange={this.onChangePassword} class="form-control" placeholder="Password" />
                                </div>
                            </div>
                            <br />
                            <div class="row">
                                        <div class="col-auto me-auto"> <button type="submit" class="btn btn-primary centre">SignUp</button></div>
                                        <div class="col-auto"> <button type="button" onClick={this.props.back} class="btn btn-primary">Already Have an Account? Log In</button></div>

                                    </div>

                        </fieldset>
                    </form>
            </div>
        );
    }
}
export default signUp