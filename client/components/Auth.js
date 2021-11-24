import React from 'react';
import { connect } from 'react-redux';
import regeneratorRuntime from 'regenerator-runtime';
import { authenticate } from '../redux'

const Auth = (props) => {
  const {name, displayName, handleSubmit, error} = props;

  return(
    <div className="container" id="login">
      <form onSubmit={handleSubmit} name={name}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label h3">
            <small>Username</small>
          </label>
          <input name="username" type="text" className="form-control"/>
          <label htmlFor="password" className="form-label h3">
            <small>Password</small>
          </label>
          <input name="password" type="password" className="form-control"/>
        </div>
        <button type="submit" className="btn btn-primary">{displayName}</button>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  )
}

const mapLogin = (state) => {
  return({
    name: 'login',
    displayName: 'Login',
    error: state.auth.error
  })
}

const mapSignup = (state) => {
  return({
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error
  })
}

const mapDispatch = (dispatch) => {
  return({
    handleSubmit(e) {
      e.preventDefault();
      const formName = e.target.name;
      const username = e.target.username.value;
      const password = e.target.password.value;
      dispatch(authenticate(username, password, formName))
    }
  })
}

export const Login = connect(mapLogin, mapDispatch)(Auth)
export const Signup = connect(mapSignup, mapDispatch)(Auth)
