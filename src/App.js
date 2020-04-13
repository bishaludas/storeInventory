import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";

// Route component
import Route from "./Routes/Route";

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
      <Route></Route>
    </Provider>
  );
};

export default App;
