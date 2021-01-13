import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
