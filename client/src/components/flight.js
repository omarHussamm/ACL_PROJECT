import React from 'react'
class flight extends React.Component {
    constructor(props) {
        super(props);
        // this.onUpdate = this.onUpdate.bind(this);
        // this.onDelete = this.onDelete.bind(this);
    }
    render() {
        return (
            <div class="card mb-3"
            //  style="max-width: 540px;"
             >
                <div class="row no-gutters">
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Flight Number: {this.props.flight.flightNumber}</h5>
                            <p class="text-muted">{this.props.flight.from} ------ {this.props.flight.to}</p>
                            <p class="card-text">{this.props.flight.departureDate}    -    {this.props.flight.arrivalDate}</p>
                            {this.props.user ==='admin' &&
                            <>
                            <a href="#" class="card-link">Update</a>
                            <a href="#" class="card-link">delete</a>
                            </>
                            }
                        </div>

                    </div>

                    <div class="col-md-4">
                        <p class="card-text"><small class="text-muted">base price</small></p>
                        <h5 class="card-title">{this.props.flight.basePrice} $</h5>
                        <p class="card-text"><small >Economy Seats {this.props.flight.numOfEconomySeatsAvailable}</small></p>
                        <p class="card-text"><small >Business Seats {this.props.flight.numOfBusinessSeatsAvailable}</small></p>
                        <p class="card-text"><small >First Class {this.props.flight.numOfFirstClassSeatsAvailable}</small></p>
                    </div>
                </div>
            </div>
        )
    }
}
export default flight