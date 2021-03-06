import React from 'react'
class summaryConfirmation extends React.Component {

    onSubmit = (e,price) =>{
            e.preventDefault();
            this.props.onSubmit4(e,price);

    } 
    render() {

        return (
            <>
            <br /><br />
                <div class="loginForm">
                    <h1 class="text-primary">
                        Departure Flight
                    </h1>
                    Departure Date and Time: {this.props.departureFlight.departureDate}<br />
                    Arrival Date and Time: {this.props.departureFlight.arrivalDate}<br />
                    Economy Seats: {this.props.numOfEconomySeats}<br />
                    Business Seats: {this.props.numOfBusinessSeats}<br />
                    First-Class Seats: {this.props.numOfFirstClassSeats}<br />
                    <br />
                    <h2 class="text-primary">Total Price:  {this.props.departureFlight.basePrice * (this.props.numOfEconomySeats * 1 + this.props.numOfBusinessSeats * 1.5 + this.props.numOfFirstClassSeats * 2)}$</h2>
                    {this.props.departureFlight.basePrice} x ({this.props.numOfEconomySeats}x1 + {this.props.numOfBusinessSeats}x1.5 + {this.props.numOfFirstClassSeats}x2)
                    <div>
                        <hr />
                    </div>
                    <h1 class="text-primary">
                        Return Flight
                    </h1>
                    Departure Date and Time: {this.props.arrivalFlight.departureDate}<br />
                    Arrival Date and Time: {this.props.arrivalFlight.arrivalDate}<br />
                    Economy Seats: {this.props.numOfEconomySeats2}<br />
                    Business Seats: {this.props.numOfBusinessSeats2}<br />
                    First-Class Seats: {this.props.numOfFirstClassSeats2}<br />
                    <br />
                    <h2 class="text-primary">Total Price:  {this.props.arrivalFlight.basePrice * (this.props.numOfEconomySeats2 * 1 + this.props.numOfBusinessSeats2 * 1.5 + this.props.numOfFirstClassSeats2 * 2)}$</h2>
                    {this.props.arrivalFlight.basePrice} x ({this.props.numOfEconomySeats2}x1 + {this.props.numOfBusinessSeats2}x1.5 + {this.props.numOfFirstClassSeats2}x2)

                    <div>
                        <hr />
                    </div>
                    <h1 class="text-primary">Entire Price:  {this.props.arrivalFlight.basePrice * (this.props.numOfEconomySeats2 * 1 + this.props.numOfBusinessSeats2 * 1.5 + this.props.numOfFirstClassSeats2 * 2) +
                        this.props.departureFlight.basePrice * (this.props.numOfEconomySeats * 1 + this.props.numOfBusinessSeats * 1.5 + this.props.numOfFirstClassSeats * 2)}$</h1>

                    <form onSubmit={ e =>{this.onSubmit(e,this.props.arrivalFlight.basePrice * (this.props.numOfEconomySeats2 * 1 + this.props.numOfBusinessSeats2 * 1.5 + this.props.numOfFirstClassSeats2 * 2) +
                        this.props.departureFlight.basePrice * (this.props.numOfEconomySeats * 1 + this.props.numOfBusinessSeats * 1.5 + this.props.numOfFirstClassSeats * 2))}}>

                        <input class="btn btn-primary" type="submit" value="Confirm" />
                    </form>
                </div>
            </>
        )
    }
}
export default summaryConfirmation