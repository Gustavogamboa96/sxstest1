import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';




const App = () => {

  return (
    <div>
    <Signup/>
    <LandingPage/>
    </div>
  );
  
};

export default App;
