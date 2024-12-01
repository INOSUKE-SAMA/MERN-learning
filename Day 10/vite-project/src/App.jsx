import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    // Apply the darkMode state to the outermost div to cover the entire screen
    <div className={darkMode ? 'bg-black text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      <nav className={`flex justify-evenly p-4 w-full ${darkMode ? 'shadow-lg shadow-white' : 'shadow-lg'}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={() => setDarkMode(!darkMode)}>Mode</button>
      </nav>

      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="/contact" element={<Contact darkMode={darkMode} />} />
      </Routes>
    </div>
  );
};

export default App;

//use useContext