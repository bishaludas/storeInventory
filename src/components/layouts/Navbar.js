import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// get user
import { connect } from "react-redux";
import { logoutUser } from "../../actions/AuthActions";

const Navbar = ({ user: { isAuthenticated }, logoutUser }) => {
  const signout = (e) => {
    e.preventDefault();
    logoutUser();
  };

  return (
    <Fragment>
      <div className="navbar-fixed">
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              Logo
            </Link>

            <a href="!#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>

              {/* Dashboard */}
              {isAuthenticated ? (
                <Fragment>
                  <li>
                    <Link to="dashboard">Dashboard</Link>
                  </li>

                  <li>
                    <a href="/logout" onClick={signout}>
                      Logout
                    </a>
                  </li>
                </Fragment>
              ) : (
                <li>
                  <Link to="be-login">Login</Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>

      {/* Mobile Menue */}
      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/categories">Categories</a>
        </li>
        {isAuthenticated ? (
          <Fragment>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>

            <li>
              <a href="/logout" onClick={signout}>
                Logout
              </a>
            </li>
          </Fragment>
        ) : (
          <li>
            <a href="/be-login">Login</a>
          </li>
        )}
      </ul>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
