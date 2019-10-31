import React from 'react';
import Header from './components/header';
import Cards from './components/cards/cards';
import Footer from './components/footer';
import './styles/App.scss';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
