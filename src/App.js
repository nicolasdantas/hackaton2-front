import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/adherents' component={Adherents} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
