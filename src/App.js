
// import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
        <Route exact path='/navbar'></Route>
        <Route exact path='/home' element={< Home />}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/alert' element={< Alert/>}></Route> 
     </Routes>
        
    </Router>
    
    </>
  );
}

export default App;