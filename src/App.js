import Navbar from "./components/Navbar";
import Team from "./components/team";
import Login from "./components/Login";
import Board from "./components/Board";
import AudioPlayer from "./components/AudioPlayer";
import LoginProvider from "../src/components/contexts/LoginContext";
import VolumeProvider from "../src/components/contexts/VolumeContext";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MentionLegale from "./components/Mentionslegales";
import "./app.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <ToastProvider placement='bottom-center'>
      <div>
        <LoginProvider>
          <VolumeProvider>
            <Router>
              <div className="App">
                <div className="main-div">
                  <Navbar />
                  <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/team" component={Team} />
                    <Route exact path="/board" component={Board} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/audioplayer" component={AudioPlayer} />
                    <Route
                      exact
                      path="/mentionslegales"
                      component={MentionLegale}
                    />
                  </Switch>
                </div>
                <Footer />
              </div>
            </Router>
          </VolumeProvider>
        </LoginProvider>
      </div>
    </ToastProvider>
  );
}

export default App;
