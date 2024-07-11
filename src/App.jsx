import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import Top3 from './pages/page-top-3.jsx/top-3';
import Top10 from './pages/page-top-10/top-10.jsx';
import Top100 from './pages/page-top-100/top-100.jsx';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Top3" element={<Top3 />} />
        <Route path="/Top10" element={<Top10 />} />
        <Route path="/Top100" element={<Top100 />} />
      </Routes>
    </div>
  );
};

export default App;