import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AthleteProfile from './Pages/AthleteProfile';
import AboutUs from './Pages/Aboutus';
import Contact from './Pages/Contact';
import SearchPage from './Pages/SearchPage';
import AddAthlete from './Pages/AddAthlete';  

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/athlete-profile/:name" element={<AthleteProfile />} />
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/add-athlete" element={<AddAthlete/>} />
      </Routes>

  );
};

export default App;
