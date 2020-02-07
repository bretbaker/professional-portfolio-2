import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Background from './components/Background';
import Navbar from './components/Navbar';
import FooterFixed from './components/FooterFixed';
import FooterStatic from './components/FooterStatic';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  const [page, setPage] = useState(0);

  return (
    <Router>
      <Background />
      <div className='container'>
        <Navbar setPage={setPage} />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={300} classNames='fade'>
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
      {page === 1 ? <FooterStatic /> : <FooterFixed />}
    </Router>
  );
}

export default App;
