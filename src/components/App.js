import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Team from './Team';
import Footer from './Footer';

const App = () => {
  return (
    <div id="app">
      <Navbar />
      <Hero />
      <Features />
      <Team />
      <Footer />
    </div>
  );
};

export default App;
