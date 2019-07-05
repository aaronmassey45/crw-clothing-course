import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInSignUpPage from './pages/signin-signup/SignInSignUpPage';
import Header from './components/header/Header';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/signin" component={SignInSignUpPage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
