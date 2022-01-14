import React from 'react'
import axios from 'axios'
import AdminLinks from './adminLinks';
import  UpdateQuery  from './updateQuery';
class deleteFlight extends React.Component {

    constructor(props) {
        super(props);
        this.onSubmitFlightNumber = this.onSubmitFlightNumber.bind(this);
    }


    state = {
        oldFlightNumber: "",
        flightNumberChoosen: false,
        flight: {}
    };
    onChangeOldFlightNumber = e => {
        this.setState({
            oldFlightNumber: e.target.value
        })
    };
    onSubmitFlightNumber = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/admin/searchbyFlightNumber'
            , {
                flightNumber: this.state.oldFlightNumber
            }).then(res => {
                this.setState({
                    flight: res.data,
                    flightNumberChoosen: true,
                })
            }
            )

    }


    render() {
        return (
            <div>
                <AdminLinks />


                {this.state.flightNumberChoosen &&
                    <>
                    <UpdateQuery flight= {this.state.flight}/>
                    </>
                }
                {!this.state.flightNumberChoosen &&
                    <form class="loginForm round2 bgwhite center" onSubmit={this.onSubmitFlightNumber}>
                    <fieldset>
                        <h2 class="text-primary">UPDATE FLIGHT</h2>
                        <br />
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Flight Number:</label>
                            <div class="col-sm-10">
                                <input type="text" value={this.state.oldFlightNumber} onChange={this.onChangeOldFlightNumber} class="form-control" placeholder="Flight number to be updated" />
                            </div>
                        </div>
                        
                        <br />
                        <button type="submit" class="btn btn-primary centre">Update Flight</button>

                    </fieldset>
                </form>
                }
            </div>
        )
    }
}

export default deleteFlight