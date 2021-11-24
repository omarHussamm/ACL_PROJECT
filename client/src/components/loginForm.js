import React from 'react'
import axios from 'axios'
<<<<<<< HEAD
import AdminHome from './adminHome'

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
        console.log("did we get here front end?");
        const user = {
            userName: this.state.userName,
            password: this.state.password
        };
        axios.post('http://localhost:5000/admin/login'
            , user).then(res => {
                if (res.data === 'success') {
                    res.render('/admin')
                } else {
                    this.setState({
                    userName: "",
                    password: ""
                })
                    alert('wrong username or password!!');
                    
                }
            })
=======
class loginForm extends React.Component {
    

    state = {
        userName:"",
        password:""
    };

    onChangeUserName = e =>{
        this.setState({
            userName:e.target.value
        })
    };

    onChangePassword = e =>{
        this.setState({
            password:e.target.value
        })
    };


    onSubmit = e =>{
        e.preventDefaut();
        
        axios.post('http://localhost:5000/admin/login'
        ,{
            userName:this.state.userName,
            password:this.state.password
        }).then(res => console.log(res.data))
>>>>>>> b14b69ed2d0f905f0851d121cc3bfe2daa6d9d5c
    }


    render() {
        return (
            <div>
<<<<<<< HEAD
                <AdminHome/>
                {/* <form onSubmit={this.onSubmit}>
                    <div>
                        <label>
                            User Name:
                            <input type="text" name="name" value={this.state.userName} onChange={this.onChangeUserName} />
=======
                <form onSubmit = {this.onSubmit}>
                    <div>
                        <label>
                            User Name:
                            <input type="text" name="name" onChange={this.onChangeUserName} />
>>>>>>> b14b69ed2d0f905f0851d121cc3bfe2daa6d9d5c
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
<<<<<<< HEAD
                            <input type="text" name="name" value={this.state.password} onChange={this.onChangePassword} />
                        </label>
                    </div>
                    <input type="submit" value="Submit" />
                </form> */}
=======
                            <input type="text" name="name" onChange={this.onChangePassword} />
                        </label>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
>>>>>>> b14b69ed2d0f905f0851d121cc3bfe2daa6d9d5c
            </div>
        )
    }


}

export default loginForm
