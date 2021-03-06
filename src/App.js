import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Background from './components/Background';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import NotFound from './pages/NotFound';

import './App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  const [page, setPage] = useState(null);

  return (
    <Router>
      {/* <Background /> */}
      <div className='container'>
        <Navbar page={page} setPage={setPage} />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={600} classNames='fade'>
                <Switch location={location}>
                  <Route
                    exact
                    path='/'
                    render={props => (
                      <Home {...props} page={page} setPage={setPage} />
                    )}
                  />
                  <Route exact path='/projects' component={Projects} />
                  <Route exact path='/contact' component={Contact} />
                  <Route exact path='/resume' component={Resume} />
                  <Route component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
