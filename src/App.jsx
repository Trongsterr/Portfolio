import React from 'react';
import Herosection from './components/Herosection';
import Header from './components/Header';
import Work from './components/Work';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Herosection />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
