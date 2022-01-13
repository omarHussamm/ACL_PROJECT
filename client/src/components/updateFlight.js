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

                <hr />

                {this.state.flightNumberChoosen &&
                    <>
                    <UpdateQuery flight= {this.state.flight}/>
                    </>
                }
                {!this.state.flightNumberChoosen &&
                    <form onSubmit={this.onSubmitFlightNumber}>
                        <div>
                            <label>
                                Flight Number:
                                <input type="text" name="name" value={this.state.oldFlightNumber} onChange={this.onChangeOldFlightNumber} />
                            </label>
                            <input type="submit" value="Choose Flight" />
                        </div>
                    </form>
                }
            </div>
        )
    }
}

export default deleteFlight