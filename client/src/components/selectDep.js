import React from 'react'
import { Link } from 'react-router-dom'
class selectDep extends React.Component {
    render() {
        return (
            <div>

                <ul>
                    <li>
                        <Link to="/searchFlights2">Search for Flights</Link>
                    </li>
                    <li>
                        <Link to="/selectFlight">Select Flight</Link>
                    </li>
                </ul>

                <hr />

                <div>
                    <form onSubmit={this.props.onSubmit}>
                        <div>
                            <label>
                                Flight Number:
                                <input type="text" name="name" value={this.props.flightNumber} onChange={this.props.onChangeFlightNumber} />
                            </label>
                        </div>
                        <input type="submit" value="Select Flight" />
                    </form>


                </div>

            </div>
        )
    }
}
export default selectDep