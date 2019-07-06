import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInSignUpPage from './pages/signin-signup/SignInSignUpPage';
import Header from './components/header/Header';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

export default class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          console.log(this.state);
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/signin" component={SignInSignUpPage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}
