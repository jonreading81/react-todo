import { takeEvery, put } from 'redux-saga/effects';
import { push } from 'connected-react-router'
import {TODO_ADD, TODO_EDIT} from '../types/todos';

function* goHome() {
  yield put(push('/'))
}

function* watchTodos() {
  yield takeEvery(TODO_ADD, goHome);
  yield takeEvery(TODO_EDIT, goHome);
}

export {
  watchTodos
};