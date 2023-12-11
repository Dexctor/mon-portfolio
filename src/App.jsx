import './App.scss';
import React from 'react';


import Header from './components/Header/Header.jsx';
import HomePage from './pages/HomePage'
import Info from './components/Info/index.jsx';
import Services from './components/Services/index.jsx';
import Footer from './components/Footer/index.jsx';
import Projects from './components/Projects/index.jsx';
import ContactSection from './components/Contact/index.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main fillHeight counter">
        <HomePage />
          <Info />
          <Services />
          <Projects />
          <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
