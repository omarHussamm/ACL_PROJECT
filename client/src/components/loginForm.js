import React from 'react'
import axios from 'axios'
import SignUp from './signUp';
import {
    Link
} from "react-router-dom";

class loginForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        userName: "",
        password: "",
        signUp: false
    };

    onChangeUserName = e => {
        this.setState({
            userName: e.target.value
        })
        console.log(this.state.userName);
    };

    onChangePassword = e => {
        this.setState({
            password: e.target.value
        })
        console.log(this.state.password);
    };


    signUp = e => {
        e.preventDefault();
        this.setState({
            signUp: true
        })
        console.log("sign up");
    };

    onSubmit = e => {
        e.preventDefault();
        const user = {
            userName: this.state.userName,
            password: this.state.password
        };
        axios.post('http://localhost:5000/admin/login'
            , user).then(res => {
                console.log("????", res.data);
                this.props.onLogIn(res.data);
                if (!(res.data.loggedIN === 'success')) {
                    this.setState({
                        userName: "",
                        password: ""
                    })
                    alert('wrong username or password!!');

                }
            })

    }

    signUp2 = newUser => {
        this.setState({
            signUp: false
        });
        console.log(newUser);
        // axios.post('http://localhost:5000/admin/login'
        //     , newUser)
    }


    render() {
        return (
            <>
                {this.state.signUp &&





                    <div>
                        <SignUp signUp={this.signUp2} />
                    </div>

                }
                {!this.state.signUp &&
                    <div class="center bgwhite">
                        <h1 class="midH">Welcome Back</h1>
                        <br />
                        <div class="loginForm">
                            <form class="loginForm" onSubmit={this.onSubmit}>
                                <fieldset>
                                    <h2 class="text-primary">BONG AIRLINES</h2>
                                    <div class="form-group row">
                                        <label for="exampleInputEmail1" class="col-sm-2 col-form-label">User Name</label>
                                        <div class="col-sm-10">
                                            <input type="text" value={this.state.userName} onChange={this.onChangeUserName} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User Name" />
                                        </div>
                                    </div>
                                    <br />
                                    <div class="form-group row">
                                        <label for="exampleInputPassword1" class="col-sm-2 col-form-label">Password</label>
                                        <div class="col-sm-10">
                                            <input type="password" value={this.state.password} onChange={this.onChangePassword} class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                    </div>
                                    <br />
                                    <div class="row">
                                        <div class="col-auto me-auto"> <Link class="text-secondary" to="/user-guest">Continue as a guest</Link></div>
                                        <div class="col-auto"> <button type="submit" class="btn btn-primary">Submit</button></div>

                                    </div>
                                </fieldset>
                            </form>

                            <br />

                            <button type="button" onClick={this.signUp} class="btn btn-primary">New? Sign-Up here</button>

                        </div>
                    </div>}
            </>
        )
    }


}

export default loginForm
