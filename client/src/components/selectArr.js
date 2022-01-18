import React from 'react'
import Flight from './flight';
class selectArr extends React.Component {
    render() {
        return (
            <div>
                <br /><br /><br />
                <div class="loginForm">
                    <h2 class="text-primary"> DEPARTURE FLIGHT </h2>
                    <Flight flight={this.props.flight} user={""} />
                </div>
                <br />
                <div class="loginForm">
                    <h2 class="text-primary">POSSIBLE ARRIVAL FLIGHTS</h2>
                </div>
                <ul class="ulnodots ulcentre">
                    {this.props.returnFlights.map(flight => {
                        return (
                            <li key={flight._id}>
                                <Flight
                                    flight={flight}
                                    user={''}
                                />
                            </li>
                        );
                    })
                    }
                </ul>
                <div>
                    <form class="loginForm round2 bgwhite" onSubmit={this.props.onSubmit2}>
                        <fieldset>
                        <h2 class="text-primary">SELECT ARRIVAL FLIGHT</h2>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Flight Number:</label>
                                <div class="col-sm-10">
                                    <input type="text" value={this.props.flightNumber2} onChange={this.props.onChangeFlightNumber2} class="form-control" placeholder="Flight number" />
                                </div>
                            </div>

                            <br />
                            <button type="submit" class="btn btn-primary centre">Select Flight</button>

                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}
export default selectArr