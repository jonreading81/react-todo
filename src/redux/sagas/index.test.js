import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import rootSaga from './index';
import { push } from 'connected-react-router';

describe('rootSaga', () => {
  it('Adding a todo should push to the home page', () => {
    return expectSaga(rootSaga)
      .put(push('/'))
      .dispatch({ type: 'TODO_ADD' })
      .run();
  });
})



