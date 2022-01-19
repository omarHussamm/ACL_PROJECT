import React from 'react'
class reservation extends React.Component {

    render() {
        return (
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Reservation Number: {this.props.reservation.reservationNumber}</h5>
                            <p class="text-muted">{this.props.reservation.depFlightNumber} ------ {this.props.reservation.arrFlightNumber}</p>
                            <p class="card-text"><small >Economy Seats: {this.props.reservation.depEconomySeats.toString()}</small></p>
                            <p class="card-text"><small >Business Seats: {this.props.reservation.depBusinessSeats}</small></p>
                            <p class="card-text"><small >First Class: {this.props.reservation.depFirstClassSeats}</small></p>
                            {this.props.user === 'admin' &&
                                <div class="row">
                                    <div class="col-auto me-auto">  <button class="btn btn-primary centre" onClick={e => { this.props.onUpdate(e, this.props.reservation) }}>Update</button></div>
                                    <div class="col-auto"> <button class="btn btn-primary centre" onClick={e => { this.props.onDelete(e, this.props.reservation) }}>delete</button></div>

                                </div>

                            }
                            {this.props.user === 'user' &&
                                <>
                                    <a href="#" class="card-link">book</a>
                                </>
                            }
                        </div>

                    </div>

                    <div class="col-md-4">
                        <p class="card-text"><small class="text-muted">Price</small></p>
                        <h5 class="card-title">{this.props.reservation.Price} $</h5>
                        <p class="card-text"><small >Economy Seats: {this.props.reservation.arrEconomySeats}</small></p>
                        <p class="card-text"><small >Business Seats: {this.props.reservation.arrBusinessSeats}</small></p>
                        <p class="card-text"><small >First Class: {this.props.reservation.arrFirstClassSeats}</small></p>
                    </div>
                </div>
            </div>
        )
    }
}
export default reservation