import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/footer' component={Footer} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
