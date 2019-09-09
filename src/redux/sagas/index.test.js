import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import rootSaga from './index';
import { push } from 'connected-react-router';
import {reset} from 'redux-form';

describe('rootSaga', () => {
  it('Adding a todo should reset the form', () => {
    return expectSaga(rootSaga)
      .put(resetForm('add-form'))
      .dispatch({ type: 'TODO_ADD' })
      .run();
  });

  it('editing a todo should push to the home page', () => {
    return expectSaga(rootSaga)
      .put(push('/'))
      .dispatch({ type: 'TODO_EDIT' })
      .run();
  });
})



