import React, { useEffect, useState } from "react";
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

  const [SearchKeyword, setSearchKeyword] = useState("");

  // usestate to getitems()
  const items = [
    {
      id: 1,
      name: "Potato",
      quantity: "1 dharni",
      price: 110,
      keyword: "alo, aloo, alu",
      updated_at: "2020-2-20"
    },
    {
      id: 2,
      name: "Onion",
      quantity: "1 kg",
      price: 90,
      keyword: "pyaj, pa,"
    }
  ];

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>

        <div className="container">
          <Switch>
            <Route exact path="/">
              {/* search items */}
              <SearchBar setSearchKeyword={setSearchKeyword} />
              <Items items={items} SearchKeyword={SearchKeyword} />
            </Route>

            <Route exact path="/about" component={About}></Route>

            <Route
              path="/show-item/:id"
              render={props => <ShowItem {...props} />}
            ></Route>

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
