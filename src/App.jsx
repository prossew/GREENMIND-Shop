import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import BestSelling from './components/BestSelling'; 
import Footer from './components/Footer';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <BestSelling /> 
      <Footer />
    </div>
  );
}

export default App;
