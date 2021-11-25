import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from "../redux";

const Navbar = ({ handleClick, isLoggedIn}) => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div id="title" className="me-auto">
        <h1>Sketchify</h1>
      </div>
      <div className="justify-content-end">
        {isLoggedIn ? (
          <div>
            <Link to="/">
              Home
            </Link>
            <Link to="/drawing">
              Draw
            </Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            <Link to="/login">
              Log In
            </Link>
            <Link to="/signup">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar);
