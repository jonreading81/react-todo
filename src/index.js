import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './redux/store';
import App from './App';
import TodoList from './containers/todoList';
import AddTodo from './containers/addTodo';

const store = configureStore({});
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
              <Route exact path="/" render={() => (<TodoList />)} />
              <Route exact path="/add" render={() => (<AddTodo />)} />
              <Route render={() => (<div>Not Found</div>)} />
            </Switch>
        </App>
        </ConnectedRouter>
  </Provider>,
  rootElement
)