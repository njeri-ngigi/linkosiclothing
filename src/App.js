import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.scss';
import Home from './containers/home';
import CardsView from './containers/cardsView';
import Cart from './containers/cart';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/designs/:pathName" component={CardsView}/>
      <Route path="/cart" component={Cart}/>
    </Switch>
  </BrowserRouter>
);

export default App;
