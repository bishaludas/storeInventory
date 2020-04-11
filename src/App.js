import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

// FE
import Root from "./Routes/Route";

// import styles
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./bootstrap.css";
import "./App.css";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Root></Root>
      </Router>
    </Provider>
  );
};

export default App;
