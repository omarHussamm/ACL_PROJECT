import React from 'react'
import axios from 'axios'
class changeSeat extends React.Component {
    state = {
        oldSeat: "",
        newSeat: ""
    }
    onChangeOldSeat = e => {
        this.setState({
            oldSeat: e.target.value
        })
    };

    onChangeNewSeat = e => {
        this.setState({
            newSeat: e.target.value
        })
    };

    onSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/user/changeSeat",{
            oldSeat: this.state.oldSeat,
            newSeat: this.state.newSeat,
            reservation: this.props.reservation

        })
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Your Seats</h3>
                    <p>Economy Seat(s): {this.props.reservedEconomySeats.toString()}</p>
                    <p>Business Seat(s): {this.props.reservedBusinessSeats.toString()}</p>
                    <p>First-Class Seat(s): {this.props.reservedFirstClassSeats.toString()}</p>
                    <hr/>
                    <h3>Available Seats</h3>
                    <p>Economy Seat(s): {this.props.flight.EconomySeatsAvailable.toString()}</p>
                    <p>Business Seat(s): {this.props.flight.BusinessSeatsAvailable.toString()}</p>
                    <p>First-Class Seat(s): {this.props.flight.FirstClassSeatsAvailable.toString()}</p>
                </div>

                <hr/>

                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>
                            Old Seat:
                            <input type="text" name="name" value={this.state.oldSeat} onChange={this.onChangeOldSeat} />
                        </label>
                    </div>
                    <div>
                        <label>
                            New Seat:
                            <input type="text" name="name" value={this.state.newSeat} onChange={this.onChangeNewSeat} />
                        </label>
                    </div>
                    <input type="submit" value="Submit" />
                    <br />
                </form>
            </div>
        )
    }
}
export default changeSeat