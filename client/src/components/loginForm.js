import React from 'react'
import axios from 'axios'
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
        password: ""
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


    onSubmit = e => {
        e.preventDefault();
        const user = {
            userName: this.state.userName,
            password: this.state.password
        };
        axios.post('http://localhost:2600/admin/login'
            , user).then(res => {
                console.log(res.data);
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


    render() {
        return (
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
                    <br/>
                </form>
                <Link to="/user-guest">Continue as a guest</Link>
            </div>
        )
    }


}

export default loginForm
