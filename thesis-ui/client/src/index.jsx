// import App from './App.jsx';
import store from './store';
// import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import indexRoutes from './routes/index.jsx';

// For Custume History
// import { createBrowserHistory } from 'history';
// import { Router, Route, Switch } from 'react-router-dom';
// const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {/* history={hist}  for custom history */}
      <MuiThemeProvider>
        <Switch>
          {indexRoutes.map((prop, key) => (
            <Route path={prop.path} component={prop.component} key={key} />
          ))}
        </Switch>
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('app')
);
