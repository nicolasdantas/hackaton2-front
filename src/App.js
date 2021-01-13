import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Webcam from "./components/Webcam";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Webcam} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
