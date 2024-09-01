import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AthleteProfile from './Pages/AthleteProfile';

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/athlete-profile/:name" element={<AthleteProfile />} />
      </Routes>

  );
};

export default App;
