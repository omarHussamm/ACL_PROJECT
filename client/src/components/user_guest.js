import React from 'react'
import SelectFlight from './selectFlight';
import SearchFlights2 from './searchFlights2';
import {
    Routes,
    Route,
    Link
} from "react-router-dom";


class user_guest extends React.Component {

    render() {
        return (
            <div>
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
                        <h1> Welcome to BongAirlines! </h1>

                        <Routes>
                            <Route path='/selectFlight' exact element={<SelectFlight />} />
                            <Route path='/searchFlights2' exact element={<SearchFlights2 />} />
                        </Routes>
                    </div>
                
            </div>
        );
    }
}
export default user_guest
