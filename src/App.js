import React from 'react';
import { LandingPage } from './LandingPage/LandingPage';
import { Routes, Route } from 'react-router-dom';
import { Search } from './Search/Search';



function App() {
  return (
    <Routes>
      <Route path='/search' element={<Search />} />
      <Route path='/' element={<LandingPage />} />
    </Routes>

  );
}

export default App;
