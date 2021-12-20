import React from 'react'
class selectArr extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>flight Number</th>
                        <th>from</th>
                        <th>to</th>
                        <th>Departure Date</th>
                        <th>Arrival Date</th>
                        <th>Economy Seats Available</th>
                        <th>Business Seats Available</th>
                        <th>First Class Seats Available</th>
                        <th>Base Price</th>
                    </tr>
                    {this.props.returnFlights.map(flight => {
                        return (
                            <tr>
                                <td>{flight.flightNumber}</td>
                                <td>{flight.from}</td>
                                <td>{flight.to}</td>
                                <td>{flight.arrivalDate}</td>
                                <td>{flight.departureDate}</td>
                                <td>{flight.numOfEconomySeatsAvailable}</td>
                                <td>{flight.numOfBusinessSeatsAvailable}</td>
                                <td>{flight.numOfFirstClassSeatsAvailable}</td>
                                <td>{flight.basePrice}</td>
                            </tr>
                        );
                    })
                    }</table>
                <div>
                    <form onSubmit={this.props.onSubmit2}>
                        <div>
                            <label>
                                Return Flight Number:
                                <input type="text" name="name" value={this.props.flightNumber2} onChange={this.props.onChangeFlightNumber2} />
                            </label>
                        </div>
                        <input type="submit" value="Select Flight" />
                    </form>

                </div>
            </div>
        )
    }
}
export default selectArr