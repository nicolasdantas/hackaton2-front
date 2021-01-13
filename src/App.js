import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MentionLegale from './components/Mentionslegales';
import './app.scss';

function App() {
  return (
    <div>
      <Router>
        <div className='App'>
        <div className="main-div">
          <Switch>
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/mentionslegales' component={MentionLegale} />
          </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
