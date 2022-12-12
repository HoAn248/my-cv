
import './App.css';
import React from "react";
import Header from './compoments/Header/Header';
import Banner from './compoments/Banner/Banner';
import Projects from './compoments/Projects/Projects';
import Contact from './compoments/Contact/Contact';
import Footer from './compoments/Footer/Footer';

function App() {
  
  return (
    <div className="container">
      <Header></Header>
      <Banner></Banner>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App;
