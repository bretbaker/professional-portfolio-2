import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Moment from 'react-moment';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  return (
    <Router>
      <div className='body'>
        <div className='background-overlay'>
          <div className='container'>
            <Navbar />
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={300}
                    classNames='fade'
                  >
                    <Switch location={location}>
                      <Route exact path='/' component={Home} />
                      <Route exact path='/projects' component={Projects} />
                      <Route exact path='/contact' component={Contact} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </div>
          <div className='footer'>
            &copy; Copyright{' '}
            <span className='copyright-year'>
              <Moment date={Date.now()} format='YYYY' />
            </span>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
