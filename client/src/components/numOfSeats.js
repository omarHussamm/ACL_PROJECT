import React from 'react'
import Flight from './flight';
class numOfSeats extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    state = {
        numOfEconomySeatsAvailable: "",
        numOfBusinessSeatsAvailable: "",
        numOfFirstClassSeatsAvailable: "",
        numOfEconomySeatsAvailable2: "",
        numOfBusinessSeatsAvailable2: "",
        numOfFirstClassSeatsAvailable2: "",
    }

    onChangenumOfFirstClassSeatsAvailable = e => {
        this.setState({
            numOfFirstClassSeatsAvailable: e.target.value
        })
    };
    onChangenumOfBusinessSeatsAvailable = e => {
        this.setState({
            numOfBusinessSeatsAvailable: e.target.value
        })
    };
    onChangenumOfEconomySeatsAvailable = e => {
        this.setState({
            numOfEconomySeatsAvailable: e.target.value
        })
    };

    onChangenumOfFirstClassSeatsAvailable2 = e => {
        this.setState({
            numOfFirstClassSeatsAvailable2: e.target.value
        })
    };
    onChangenumOfBusinessSeatsAvailable2 = e => {
        this.setState({
            numOfBusinessSeatsAvailable2: e.target.value
        })
    };
    onChangenumOfEconomySeatsAvailable2 = e => {
        this.setState({
            numOfEconomySeatsAvailable2: e.target.value
        })
    };

    onSubmit = e => {
        e.preventDefault();

        this.props.onSubmit3(
            this.state.numOfEconomySeatsAvailable,
            this.state.numOfBusinessSeatsAvailable,
            this.state.numOfFirstClassSeatsAvailable,
            this.state.numOfEconomySeatsAvailable2,
            this.state.numOfBusinessSeatsAvailable2,
            this.state.numOfFirstClassSeatsAvailable2
        )
    }

    render() {
        return (
            <div>
                <br />
                <div class="loginForm">
                    <h2 class="text-primary"> DEPARTURE FLIGHT </h2>
                    <Flight flight={this.props.departureFlight} user={""} />
                </div>
                <div class="seatsForm">
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Number of Economy Seats:</label>
                        <div class="col-sm-10">
                            <input type="text" value={this.state.numOfEconomySeatsAvailable} onChange={this.onChangenumOfEconomySeatsAvailable} class="form-control" placeholder="Number of Economy Seats" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Number of Business Seats:</label>
                        <div class="col-sm-10">
                            <input type="text" value={this.state.numOfBusinessSeatsAvailable} onChange={this.onChangenumOfBusinessSeatsAvailable} class="form-control" placeholder="Number of Business Seats" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Number of First-Class Seats:</label>
                        <div class="col-sm-10">
                            <input type="text" value={this.state.numOfFirstClassSeatsAvailable} onChange={this.onChangenumOfFirstClassSeatsAvailable} class="form-control" placeholder="Number of First-Class Seats" />
                        </div>
                    </div>
                </div>
                <hr />
                <div class="loginForm">
                    <h2 class="text-primary"> ARRIVAL FLIGHT </h2>
                    <Flight flight={this.props.arrivalFlight} user={""} />
                </div>
                <div class="seatsForm">
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Number of Economy Seats:</label>
                        <div class="col-sm-10">
                            <input type="text" value={this.state.numOfEconomySeatsAvailable2} onChange={this.onChangenumOfEconomySeatsAvailable2} class="form-control" placeholder="Number of Economy Seats" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Number of Business Seats:</label>
                        <div class="col-sm-10">
                            <input type="text" value={this.state.numOfBusinessSeatsAvailable2} onChange={this.onChangenumOfBusinessSeatsAvailable2} class="form-control" placeholder="Number of Business Seats" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Number of First-Class Seats:</label>
                        <div class="col-sm-10">
                            <input type="text" value={this.state.numOfFirstClassSeatsAvailable2} onChange={this.onChangenumOfFirstClassSeatsAvailable2} class="form-control" placeholder="Number of First-Class Seats" />
                        </div>
                    </div>
                </div>
                
                <div class="loginForm padding">
                    <form onSubmit={this.onSubmit}>

                        <input type="submit" class="btn btn-primary" value="Confirm Number of Seats" />
                    </form>

                </div>
            </div>
        )
    }
}
export default numOfSeats