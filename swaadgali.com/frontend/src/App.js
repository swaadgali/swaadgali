import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Vendor from './pages/Vendor';
import NotFound from './pages/NotFound';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/vendor/:id" component={Vendor} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
