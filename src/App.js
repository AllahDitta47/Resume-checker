import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import SignUp from './components/Signup'; 
import SignIn from './components/Signin';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        
        
        {/* Sign-up route */}
        <Route exact path="/sign-up" element={<SignUp />} />  
        <Route exact path="/sign-in" element={<SignIn />} />  
        <Route exact path="/" element={<Home />} />  
      </Routes>
    </Router>
  );
}

export default App;
