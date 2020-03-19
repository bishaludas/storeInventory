import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import SearchBar from "./components/layouts/SearchBar";
import About from "./components/about/About";
import Items from "./components/items/Items";
import ShowItem from "./components/items/ShowItem";

// import styles
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import "./bootstrap.css";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>

        <div className="container">
          <Switch>
            <Route exact path="/">
              <SearchBar />
              <Items />
            </Route>

            <Route exact path="/about" component={About}></Route>

            <Route path="/show-item/:id" component={ShowItem}></Route>

            <Route exact path="/login">
              <p>login page</p>
            </Route>
          </Switch>

          {/* crud item */}
          {/* search item */}
        </div>
      </div>
    </Router>
  );
};

export default App;
