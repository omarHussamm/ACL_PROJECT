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
import ChangePassword from './components/changePassword';
import EditReservation from './components/editReservation';
import React from 'react';


class App extends React.Component {
  state = {
    userType: -1,
    flightChoosen: false,
    departureFlight: "",
    arrivalFlight: "",
    userToken: 0
  }

  logged = (userToken) => {
    this.setState({
      userToken:userToken,
      userType:1
    })
  }

  onLogIn = (res) => {
    if (res.loggedIN === 'success') {
      this.setState({
        userType: res.type,
        userToken: res.userToken
      })
    }
  }
  render() {
    return (
      <div>
        <Router>
          <Routes>
            {this.state.userType=== -1 &&
              <Route path="/" exact element={<LoginForm onLogIn={this.onLogIn} />} />}
            {this.state.userType > 0 &&
              <Route path="/" exact element={<Userguest userToken={this.state.userToken} />} />}
            {this.state.userType === 0 &&
              <Route path="/" exact element={<AdminHome />} />}

            <Route path="/createFlight" exact element={<CreateFlight />} />

            <Route path="/user-guest" exact element={<Userguest userToken={this.state.userToken} />} />

            <Route path='/deleteFlight' exact element={<DeleteFlight />} />

            <Route path='/updateFlight' exact element={<UpdateFlight />} />

            <Route path='/listAllFlights' exact element={<ListAllFlights />} />

            <Route path='/searchFlights' exact element={<SearchFlights />} />

            <Route path='/cancelReservation' exact element={<CancelReservation userToken={this.state.userToken} />} />

            <Route path='/viewReservation' exact element={<ViewReservation userToken={this.state.userToken} />} />

            <Route path='/editProfile' exact element={<EditProfile userToken={this.state.userToken} />} />

            <Route path='/searchFlights2' exact element={
              <SearchFlights2
              userToken={this.state.userToken}
            />} />

            <Route path='/selectFlight' exact element={
              <SelectFlight
                logged={this.logged}
                userToken={this.state.userToken}
              />} />

            <Route path='/changePassword' exact element={<ChangePassword />} userToken={this.state.userToken} />

            <Route path='/editReservation' exact element={<EditReservation />} userToken={this.state.userToken} />

          </Routes>
        </Router>
      </div>
    )
  }

}

export default App;
