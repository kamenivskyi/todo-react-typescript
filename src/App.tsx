import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className='container' style={{ marginTop: '2rem' }}>
        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={About} path='/about' exact />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
