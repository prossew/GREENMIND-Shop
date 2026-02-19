import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import BestSelling from './components/BestSelling';
import About from './components/About';
import Categories from './components/Categories';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <BestSelling />
      <About />
      <Categories />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
