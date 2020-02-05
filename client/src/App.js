import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

import './App.css';

function App() {
  return (
    <Router>
      <div className='body'>
        <div className='background-overlay'>
          <div className='container'>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Landing} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
