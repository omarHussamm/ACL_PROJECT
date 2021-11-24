import React from 'react'
import CreateFlight from './createFlight';
import DeleteFlight from './deleteFlight';
import UpdateFlight from './updateFlight';
import ListAllFlights from './listAllFlights';
import SearchFlights from './searchFlights';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

export default function AdminHome() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/createFlight">Create Flight</Link>
                    </li>
                    <li>
                        <Link to="/deleteFlight">Delete Flight</Link>
                    </li>
                    <li>
                        <Link to="/updateFlight">Update Flight</Link>
                    </li>
                    <li>
                        <Link to="/listAllFlights">List All Flights</Link>
                    </li>
                    <li>
                        <Link to="/searchFlights">Search for Flights</Link>
                    </li>
                </ul>

                <hr />

                <Routes>
                    <Route path='/createFlight' exact element={<CreateFlight />} />
                    <Route path='/deleteFlight' exact element={<DeleteFlight />} />
                    <Route path='/updateFlight' exact element={<UpdateFlight />} />
                    <Route path='/listAllFlights' exact element={<ListAllFlights />} />
                    <Route path='/searchFlights' exact element={<SearchFlights />} />
                </Routes>
            </div>
        </Router>
    );
}
