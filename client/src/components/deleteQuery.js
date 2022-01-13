import React from 'react'
import axios from 'axios'
import Flight from './flight';
import {
    Link
} from "react-router-dom";

class deleteQuery extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        done: false
    };

    onSubmit = e => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to delete?")) {
            axios.post('http://localhost:5000/admin/deleteFlight'
                , { flightNumber: this.props.flight.flightNumber }).then(res => {
                    this.setState({
                        done: true
                    })
                }
                )
        }
    }
    render() {
        return (
            <div>
                {this.state.done &&
                    <>
                        <h1>
                            <Link to="/">Delete Done Go back to Home Page</Link>
                        </h1>
                    </>
                }
                {!this.state.done &&
                    <>
                        <hr />
                        <Flight flight={this.props.flight} user={""} />
                        <hr />
                        <button onClick={this.onSubmit}>Delte Flight</button>
                    </>
                }
            </div>
        )
    }
}

export default deleteQuery