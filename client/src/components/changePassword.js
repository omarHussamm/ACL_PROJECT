import React from 'react'
// import axios from 'axios'
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
                    <UserLinks />


                    <hr />
                    <h1> Change Password </h1>

                    <div>
                        <form onSubmit={this.onSubmit}>

                            <div>
                                <label>
                                    Old Password:
                                    <input type="text" name="name" value={this.state.oldPassword} onChange={this.onChangeOldPassword} />
                                </label>
                            </div>
                            <div>
                                <label>
                                   New Password:
                                    <input type="text" name="name" value={this.state.newPassword} onChange={this.onChangeNewPassword} />
                                </label>
                            </div>
                            
                            <input type="submit" value="Change Password" />
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}
export default changePassword