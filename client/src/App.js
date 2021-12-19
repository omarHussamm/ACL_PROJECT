import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from './components/loginForm';
import AdminHome from './components/adminHome';
import CreateFlight from './components/createFlight';
import DeleteFlight from './components/deleteFlight';
import UpdateFlight from './components/updateFlight';
import ListAllFlights from './components/listAllFlights';
import SearchFlights from './components/searchFlights';
import SelectFlight from './components/selectFlight';
import SearchFlights2 from './components/searchFlights2';
import Userguest from './components/user_guest';
import React from 'react';

class App extends React.Component {
  state = {
    loggedIn: false,
    userType: -1,
    flightChoosen: false,
    departureFlight: "",
    arrivalFlight: ""
  }

  onChooseFlight = (arrFlight, depFlight) => {
    console.log("haaaaaa");
    this.setState({
      flightChoosen: true,
      departureFlight: depFlight,
      arrivalFlight: arrFlight
    })
  }

  onLogIn = (res) => {
    if (res.loggedIN === 'success') {
      this.setState({
        loggedIn: true,
        userType: res.type
      })
    } else {
      this.setState({ loggedIn: false })
    }
  }
  render() {
    return (
      <div>
        <Router>
          <Routes>
            {!this.state.loggedIn &&
              <Route path="/" exact element={<LoginForm onLogIn={this.onLogIn} />} />}
            {this.state.loggedIn && this.state.userType !== 0 &&
              <Route path="/" exact element={<Userguest flightChoosen={this.state.flightChoosen}
                departureFlight={this.state.departureFlight}
                arrivalFlight={this.state.arrivalFlight} />} />}
            {this.state.loggedIn && this.state.userType === 0 &&
              <Route path="/" exact element={<AdminHome />} />}

            <Route path="/createFlight" exact element={<CreateFlight />} />
            <Route path='/deleteFlight' exact element={<DeleteFlight />} />
            <Route path='/updateFlight' exact element={<UpdateFlight />} />
            <Route path='/listAllFlights' exact element={<ListAllFlights />} />
            <Route path='/searchFlights' exact element={<SearchFlights />} />
            <Route path='/searchFlights2' exact element={<SearchFlights2 />} />
            <Route path='/selectFlight' exact element={<SelectFlight />} />
          </Routes>
        </Router>
      </div>
    )
  }

}

export default App;
