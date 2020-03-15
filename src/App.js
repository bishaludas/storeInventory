import React, { useEffect } from "react";
import Navbar from "./components/layouts/Navbar";

// import styles
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      hello
    </div>
  );
};

export default App;
