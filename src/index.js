import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './redux/store';
import App from './App';

const store = configureStore({});
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
              <Route exact path="/" render={() => (<div>List</div>)} />
              <Route exact path="/add" render={() => (<div>Add</div>)} />
              <Route render={() => (<div>Not Found</div>)} />
            </Switch>
        </App>
        </ConnectedRouter>
  </Provider>,
  rootElement
)