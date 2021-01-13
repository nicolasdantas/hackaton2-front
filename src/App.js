import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
