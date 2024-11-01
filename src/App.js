import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import VerticalScrollProgressBar from './components/VerticalScrollProgressBar';
import Signup from './components/Signup';



const App = () => {

  return (
    <div>
    {/* <VerticalScrollProgressBar/> */}
    <Signup/>
    <LandingPage/>
    </div>
  );
  
};

export default App;
