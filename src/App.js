import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Additional routes will be added here as we develop more pages */}
    </Routes>
  </Router>
);

export default App;
