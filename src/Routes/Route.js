import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

// FE
import Navbar from "../components/layouts/Navbar";
import SearchBar from "../components/layouts/SearchBar";
import About from "../components/about/About";
import Items from "../components/items/Items";
import ShowItem from "../components/items/ShowItem";
import Category from "../components/category/Category";

// BE
import Login from "../components/BE/Auth/Login";
import Dashboard from "../components/BE/Dashboard/Dashboard";

// Action functions
import { getUser } from "../actions/AuthActions";

const Root = ({
  user: { isAuthenticated, currentUser, message, error },
  getUser,
}) => {
  useEffect(() => {
    if (!isAuthenticated) {
      getUser();
    }
    // eslint-disable-next-line
  }, []);

  const [SearchKeyword, setSearchKeyword] = useState("");
  const resetItems = () => {
    setSearchKeyword("");
  };

  const itemDetails = {
    id: 201,
    item_name: "Tuna fish",
    quantity: 1,
    price: 120,
    keywords: "lorem20lorem20lorem20lorem20lorem20 lorem20lorem20 lorem20",
  };

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>

        <div className="container">
          <Switch>
            <Route exact path="/">
              {/* FE search items */}
              <SearchBar setSearchKeyword={setSearchKeyword} />
              <Items SearchKeyword={SearchKeyword} resetItems={resetItems} />
            </Route>

            <Route
              path="/show-item/:id"
              render={(props) => (
                <ShowItem {...props} itemDetails={itemDetails} />
              )}
            ></Route>

            <Route exact path="/about" component={About}></Route>
            <Route exact path="/categories" component={Category}></Route>

            {/* BE */}
            <Route
              exact
              path="/be-login"
              render={(props) =>
                isAuthenticated === true ? (
                  <Redirect to="dashboard"></Redirect>
                ) : (
                  <Login></Login>
                )
              }
            ></Route>
          </Switch>

          {/* crud item */}
        </div>

        <Switch>
          <ProtectedRoute
            exact
            path="/dashboard"
            userAuth={isAuthenticated}
            component={Dashboard}
          />

          <ProtectedRoute
            exact
            path="/be-items"
            userAuth={isAuthenticated}
            component={Dashboard}
          />
          <ProtectedRoute
            exact
            path="/be-categories"
            userAuth={isAuthenticated}
            component={Dashboard}
          />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUser })(Root);
