import React, { Component } from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

export default class SignIn extends Component {
  state = { email: '', password: '' };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
