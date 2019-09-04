import { takeEvery, put } from 'redux-saga/effects';
import { push } from 'connected-react-router'
import {TODO_ADD} from '../types/todos';

function* todoAdded() {
  yield put(push('/'))
}

function* watchTodoAdd() {
  yield takeEvery('TODO_ADD', todoAdded)
}

export {
  watchTodoAdd
};