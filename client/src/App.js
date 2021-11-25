import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from './components/loginForm';
import AdminHome from './components/adminHome';
import CreateFlight from './components/createFlight';
import DeleteFlight from './components/deleteFlight';
import UpdateFlight from './components/updateFlight';
import ListAllFlights from './components/listAllFlights';
import SearchFlights from './components/searchFlights';
import React from 'react';

class App extends React.Component {
  state = { loggedIn: false }

  onLogIn = (res) => {
    console.log(res,"hmm");
    if (res === 'success') {
      this.setState({ loggedIn: true })
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
            {this.state.loggedIn &&
              <Route path="/" exact element={<AdminHome />} />}

            {/* <Route path="/admin" exact element={<AdminHome />} /> */}
            <Route path="/createFlight" exact element={<CreateFlight />} />
            <Route path='/deleteFlight' exact element={<DeleteFlight />} />
            <Route path='/updateFlight' exact element={<UpdateFlight />} />
            <Route path='/listAllFlights' exact element={<ListAllFlights />} />
            <Route path='/searchFlights' exact element={<SearchFlights />} />
          </Routes>
        </Router>
      </div>
    )
  }

}

export default App;
