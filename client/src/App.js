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
import CancelReservation from './components/cancelReservation';
import ViewReservation from './components/viewReservation';
import EditProfile from './components/editProfile';
import React from 'react';

class App extends React.Component {
  state = {
    loggedIn: false,
    userType: -1,
    flightChoosen: false,
    departureFlight: "",
    arrivalFlight: "",
  }

  switchToUser = () => {
    // this.setState({
    //   user: true
    // })
    console.log("yala nenam");
  }

  logged = () =>{
    this.setState({
      loggedIn:true
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
            {this.state.userType !== 0 && 
              <Route path="/" exact element={<Userguest user={this.state.loggedIn}/>} />}
            {this.state.loggedIn && this.state.userType === 0 && 
              <Route path="/" exact element={<AdminHome />} />}

            <Route path="/createFlight" exact element={<CreateFlight />} />
            <Route path="/user-guest" exact element={<Userguest user={this.state.loggedIn}/>} />
            <Route path='/deleteFlight' exact element={<DeleteFlight />} />
            <Route path='/updateFlight' exact element={<UpdateFlight />} />
            <Route path='/listAllFlights' exact element={<ListAllFlights />} />
            <Route path='/searchFlights' exact element={<SearchFlights />} />
            <Route path='/cancelReservation' exact element={<CancelReservation />} />
            <Route path='/viewReservation' exact element={<ViewReservation />} />
            <Route path='/editProfile' exact element={<EditProfile />} />
            <Route path='/searchFlights2' exact element={<SearchFlights2 user={this.state.loggedIn} />} />
            <Route path='/selectFlight' exact element={<SelectFlight logged={this.logged} user={this.state.loggedIn} switchToUser={this.switchToUser} />} />
          </Routes>
        </Router>
      </div>
    )
  }

}

export default App;
