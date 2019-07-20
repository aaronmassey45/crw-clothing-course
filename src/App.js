import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInSignUpPage from './pages/signin-signup/SignInSignUpPage';
import Header from './components/header/Header';
import CheckoutPage from './pages/checkout/CheckoutPage';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import { GlobalStyle } from './global.styles';
const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
          }
        />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
