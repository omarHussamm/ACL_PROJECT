import React from 'react'
<<<<<<< HEAD
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
=======
import axios from 'axios'


class adminHome extends React.Component {
    state = {
        flights: []
        }  
    listflights = ()=>{
        axios.get("http://localhost:5000/flights").then(res=>{
            const flights = res.data;
            this.setState({flights});
            console.log(flights);
        });
        
        
    };

    render(){return (
        <div>
           <button onClick={this.listflights}>
               Show All Flights
           </button>
           <ul>
           {this.state.flights.map(flights=> {
               return(
                   <div>
                <li>{flights._id}</li>
                <li>{flights.from}</li>
                <li>{flights.to}</li>
                <li>{flights.date}</li>
                <li>{flights.cabin}</li>
                <li>{flights.numOfSeatsAvailable}</li>
                </div>
               );
              
           })
        }
           </ul>
        </div>
    )}
    
}

export default adminHome;
>>>>>>> b14b69ed2d0f905f0851d121cc3bfe2daa6d9d5c
