import React from 'react'
import axios from 'axios'
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
    }


    render() {
        return (
            <div>
                <form onSubmit = {this.onSubmit}>
                    <div>
                        <label>
                            User Name:
                            <input type="text" name="name" onChange={this.onChangeUserName} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                            <input type="text" name="name" onChange={this.onChangePassword} />
                        </label>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }


}

export default loginForm
