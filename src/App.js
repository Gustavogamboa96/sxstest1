import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import VerticalScrollProgressBar from './components/VerticalScrollProgressBar';




const App = () => {

  return (
    <div>
    {/* <VerticalScrollProgressBar/> */}
    <LandingPage/>
    </div>
  );
  
};

export default App;
