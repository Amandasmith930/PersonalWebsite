import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Cards from './components/Cards';
// import Connect from './db/Connect';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Services from './components/pages/Services';
import Projects from './components/pages/Projects';
// import SignUp from './components/pages/SignUp';


//const Connect = require("./db/Connect");
//Connect();

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Cards />
        <Routes>
         
          <Route path='/' exact component={Home} />
          
          <Route path='/projects' component={Projects} />
        
        </Routes>
      </Router>
    </>
  );
}

export default App;