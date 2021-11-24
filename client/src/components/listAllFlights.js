import React from 'react'
import axios from 'axios'
class deleteFlight extends React.Component {
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

export default deleteFlight