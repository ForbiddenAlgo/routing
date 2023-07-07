import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/products';
import About from './components/about';
import Contact from './components/contact';
// import {BrowserRouter} from 'react-router-dom';
import {
  //  as Router,
  // Switch,
  Route,
  // Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/Product'} element={<Product/>}/>
        <Route path={'/About-us'} element={<About/>}/>
        <Route path={'/Contact-us'} element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
