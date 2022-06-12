import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import { BrowserRouter as Router } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Nav from "./components/nav"
import Search from './Search';
import About from './About';
import CustomRecipes from './CustomRecipes';
import Create from './Create';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/CustomRecipes" element={<CustomRecipes />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
