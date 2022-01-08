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

    signUp2 = newUser =>{
        this.setState({
            signUp: false
        });
        console.log(newUser);
        // axios.post('http://localhost:5000/admin/login'
        //     , newUser)
    }


    render() {
        return (
            <div>
                {!this.state.signUp &&
                    <div>
                        <form onSubmit={this.onSubmit}>
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
                            <input type="submit" value="Submit" />
                            <br />
                        </form>
                        <Link to="/user-guest">Continue as a guest</Link>
                        <div>
                            <form onSubmit={this.signUp}>
                                <input type="submit" value="Sign Up" />
                                <br />
                            </form>
                        </div>
                    </div>
                }


                {this.state.signUp &&
                    <div>
                        <SignUp signUp={this.signUp2} />
                    </div>
                }
            </div>
        )
    }


}

export default loginForm
