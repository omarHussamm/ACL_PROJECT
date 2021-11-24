import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from './components/loginForm';
import AdminHome from './components/adminHome';
import CreateFlight from './components/createFlight';
import React from 'react';

class App extends React.Component {



  render() {
    return (
      <div>

        <AdminHome/>
        {/* <Router>
          <Routes>
            <Route path="/" exact element={<LoginForm />} />
            <Route path="/admin" exact element={<AdminHome />} />
            <Route path="/admin/createFlight" exact element={<CreateFlight />} />

          </Routes>
        </Router> */}
      </div>
    ) 
  }

}

export default App;
