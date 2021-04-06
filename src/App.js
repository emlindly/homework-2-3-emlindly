import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

/* Imported Site Pages */
import Homepage from './pages/Homepage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Emily's Routing Assignment</h1>
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
          <Route path="/page4" component={Page4} />
        </Switch>
      </header>
      <Link className="home-link" to="/">Go home!</Link>
    </div>
  );
}
export default App;
