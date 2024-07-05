import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Top3 from '../src/pages/page-top-3.jsx/top-3';
import Top10 from '../src/pages/page-top-10.jsx/top-10';
import Top100 from '../src/pages/page-top-100.jsx/top-100';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Top3" exact component={Top3} />
          <Route path="/Top10" component={Top10} />
          <Route path="/Top100" component={Top100} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
