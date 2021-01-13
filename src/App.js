import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Board from "./components/Board";
import PrimarySearchAppBar from "./components/Navbar";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <PrimarySearchAppBar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/board" component={Board} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
