import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import StatusPage from './components/StatusPage';
import RequestPage from './components/RequestPage';

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/" component={RequestPage} exact />
        <Route path="/status" component={StatusPage} exact />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </App>
  </Router>, document.getElementById('root')
);
