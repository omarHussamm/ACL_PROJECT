import React from 'react'
class flight extends React.Component {

    render() {
        return (
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Flight Number: {this.props.flight.flightNumber}</h5>
                            <p class="text-muted">{this.props.flight.from} ------ {this.props.flight.to}</p>
                            <p class="card-text">{this.props.flight.departureDate}    -    {this.props.flight.arrivalDate}</p>
                            {this.props.user === 'admin' &&
                                <div class="row">
                                    <div class="col-auto me-auto">  <button class="btn btn-primary centre" onClick={e => { this.props.onUpdate(e, this.props.flight) }}>Update</button></div>
                                    <div class="col-auto"> <button class="btn btn-primary centre" onClick={e => { this.props.onDelete(e, this.props.flight) }}>delete</button></div>

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
                        <p class="card-text"><small class="text-muted">base price</small></p>
                        <h5 class="card-title">{this.props.flight.basePrice} $</h5>
                        <p class="card-text"><small >Economy Seats: {this.props.flight.numofEconomySeatsAvailable}</small></p>
                        <p class="card-text"><small >Business Seats: {this.props.flight.numofBusinessSeatsAvailable}</small></p>
                        <p class="card-text"><small >First Class: {this.props.flight.numofFirstClassSeatsAvailable}</small></p>
                    </div>
                </div>
            </div>
        )
    }
}
export default flight