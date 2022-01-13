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

                <hr />
                {this.state.flightChoosen && <>
                    <DeleteQuery flight={this.state.flight} />
                </>}
                {!this.state.flightChoosen &&
                    <div>
                        <form onSubmit={this.onSubmit}>
                            <div>
                                <label>
                                    Flight Number:
                                    <input type="text" name="name" value={this.state.flightNumber} onChange={this.onChangeFlightNumber} />
                                </label>
                            </div>
                            <input type="submit" value="Delete" />
                        </form>


                    </div>}
            </div>

        )
    }



}
export default deleteFlight
