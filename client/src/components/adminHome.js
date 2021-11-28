import React from 'react'
import CreateFlight from './createFlight';
import DeleteFlight from './deleteFlight';
import UpdateFlight from './updateFlight';
import ListAllFlights from './listAllFlights';
import SearchFlights from './searchFlights';
import {
    Routes,
    Route,
    Link
} from "react-router-dom";


import axios from 'axios'


class adminHome extends React.Component {
    state = {
        flights: []
    }
    listflights = () => {
        axios.get("http://localhost:5000/flights").then(res => {
            const flights = res.data;
            this.setState({ flights });
            console.log(flights);
        });


    };

    render() {
        return (
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
                <h1> Welcome to BongAirlines! </h1>

                <Routes>
                    <Route path='/createFlight' exact element={<CreateFlight />} />
                    <Route path='/deleteFlight' exact element={<DeleteFlight />} />
                    <Route path='/updateFlight' exact element={<UpdateFlight />} />
                    <Route path='/listAllFlights' exact element={<ListAllFlights />} />
                    <Route path='/searchFlights' exact element={<SearchFlights />} />
                </Routes>
            </div>
        );
    }
}


export default adminHome;
