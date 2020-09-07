import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './components/layout/Navigation';
import Where from './components/pages/Where';
import Equipment from './components/pages/Equipment';
import Safety from './components/pages/Safety';
import Types from './components/pages/Types';
import Basics from './components/pages/Basics';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div id="wrapper">
      <Header />
      <Router>
        <div className="container">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Basics} />
            <Route path="/types" component={Types} />
            <Route path="/safety" component={Safety} />
            <Route path="/equipment" component={Equipment} />
            <Route path="/where" component={Where} />
          </Switch>
        </div>
      </Router> 
      <Footer />
    </div>
    
  );
}

export default App;
