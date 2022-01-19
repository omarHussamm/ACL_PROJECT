import React from 'react'
import axios from 'axios'
import AdminLinks from './adminLinks';
import DeleteQuery from './deleteQuery';
class deleteFlight extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        flightNumber: "",
        flightChoosen: false,
    };

    onChangeFlightNumber = e => {
        this.setState({
            flightNumber: e.target.value
        })
    };

    onSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/admin/searchbyFlightNumber'
            , {
                flightNumber: this.state.flightNumber
            }).then(res => {
                this.setState({
                    flight: res.data,
                    flightChoosen: true,
                })
            }
            )

    }


    render() {
        return (
            <div>
                <AdminLinks />

                {this.state.flightChoosen && <>
                    <DeleteQuery flight={this.state.flight} />
                </>}
                {!this.state.flightChoosen &&
                    <form class="loginForm round2 bgwhite center" onSubmit={this.onSubmit}>
                        <fieldset>
                            <h2 class="text-primary">DELETE FLIGHT</h2>
                            <br />
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Flight Number:</label>
                                <div class="col-sm-10">
                                    <input type="text" value={this.state.flightNumber} onChange={this.onChangeFlightNumber} class="form-control" placeholder="Flight number to be deleted" />
                                </div>
                            </div>

                            <br />
                            <button type="submit" class="btn btn-primary centre">Delete Flight</button>

                        </fieldset>
                    </form>
                }
            </div>

        )
    }



}
export default deleteFlight
