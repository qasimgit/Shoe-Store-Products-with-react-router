import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";
import {} from "@material-ui/core";

import {Home} from './components/home'

const App = () => {
  return (
    <Router>
      <div className="navbar">
        <h1>Shoe Store</h1>
        <nav className="links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contactus">Contact</Link>
        </nav>
        <div></div>
      </div>

      <Routes>
          <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
};
export default App;
