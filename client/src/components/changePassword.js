import React from 'react'
import axios from 'axios'
import UserLinks from './userLinks';


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
        const newProfile={
            oldPassword:this.state.oldPassword,
            newPassword:this.state.newPassword,
            userToken:this.props.userToken
        }

        
        axios.post('http://localhost:5000/user/changePassword'
            , newProfile)
    }
    
    render() {
        return (
            <div>
                <div>
                    <UserLinks />

                    <div>
                    <form class="loginForm round2 bgwhite center" onSubmit={this.onSubmit}>
                        <fieldset>
                            <h2 class="text-primary">CHANGE PASSWORD</h2>
                            <br />
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Old Password:</label>
                                <div class="col-sm-10">
                                    <input type="password" value={this.state.oldPassword} onChange={this.onChangeOldPassword} class="form-control" placeholder="Old password" />
                                </div>
                            </div>
                            <br/>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">New Password:</label>
                                <div class="col-sm-10">
                                    <input type="password" value={this.state.newPassword} onChange={this.onChangeNewPassword} class="form-control" placeholder="New password" />
                                </div>
                            </div>
                            <br />
                            <button type="submit" class="btn btn-primary centre">Change Password</button>

                        </fieldset>
                    </form>
                        
                    </div>
                </div>

            </div>
        );
    }
}
export default changePassword