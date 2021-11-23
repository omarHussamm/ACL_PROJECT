import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from './components/loginForm';
import AdminHome from './components/adminHome';
import button from './components/adminHome';

function App() {
  return (
    <div>lol
    <Router>
      <Routes>
        <Route path="/" exact element={<LoginForm/>} />
        <Route path="/admin" exact element={<AdminHome/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
