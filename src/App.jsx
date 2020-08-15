import React, { useState, useEffect } from "react";
import "./App.css";
import {BrowserRouter as Router,Route,Routes,Link,Outlet} from "react-router-dom";
import DB from './db.json';

//   Components //
import {Home} from './components/home';
import {Products} from './components/products';

const App = () => {
    const [products , setProducts] = useState([]);

useEffect(() => {
  setProducts(DB.Products)
}, [])

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
          <Route path="/products" element={<Products productsData={products}/>} />

      </Routes>
    </Router>
  );
};
export default App;
