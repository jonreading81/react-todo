import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history), 
      )
    )
  );
  sagaMiddleware.run(rootSaga);
  return store
}