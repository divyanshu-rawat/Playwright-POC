import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ReactGA from 'react-ga';
import { ContactUs } from './contact';


const TRACKING_ID = "";
ReactGA.initialize(TRACKING_ID);

const Home = () => (
  <div>
    <a href='/about'>Home</a>
    <ContactUs />
  </div>
);

const About = () => (
  <div>
    <a href="/">Back to Home</a>
  </div>
);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
