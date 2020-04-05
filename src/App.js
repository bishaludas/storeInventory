import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider, connect } from "react-redux";
import store from "./store";

// FE
import Navbar from "./components/layouts/Navbar";
import SearchBar from "./components/layouts/SearchBar";
import About from "./components/about/About";
import Items from "./components/items/Items";
import ShowItem from "./components/items/ShowItem";
import Category from "./components/category/Category";

// BE
import Login from "./components/BE/Auth/Login";

// import styles
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./bootstrap.css";
import "./App.css";
import Dashboard from "./components/BE/Dashboard/Dashboard";

const App = () => {
  const [SearchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    M.AutoInit();
  }, []);

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
    <Provider store={store}>
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
              <Route exact path="/be-login" component={Login}></Route>

              <Route
                exact
                path="/dashboard"
                render={(props) =>
                  localStorage.getItem("isAuthenicated") === true ? (
                    <Dashboard></Dashboard>
                  ) : (
                    <Redirect to="be-login"></Redirect>
                  )
                }
              ></Route>
            </Switch>

            {/* crud item */}
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
