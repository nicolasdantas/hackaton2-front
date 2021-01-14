import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Team from "./components/team";
import Login from "./components/Login";
import Board from "./components/Board";
import LoginProvider from '../src/components/contexts/LoginContext'

function App() {
  return (
    <div>
      <LoginProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/board" component={Board} />
          </Switch>
        </div>
      </Router>
      </LoginProvider>
    </div>
  );
}

export default App;
