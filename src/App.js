import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Team from './components/team';

function App() {
  return (
    <div>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/team' component={Team} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
