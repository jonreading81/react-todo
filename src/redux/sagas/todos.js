import { takeEvery, put } from 'redux-saga/effects';
import { push } from 'connected-react-router'
import {TODO_ADD, TODO_EDIT} from '../types/todos';
import {reset} from 'redux-form';

function* todoAdded() {
  yield put(reset('add-form'));
}

function* todoEdited() {
 yield put(push('/'));
}

function* watchTodos() {
  yield takeEvery(TODO_ADD, todoAdded);
  yield takeEvery(TODO_EDIT, todoEdited);
}

export {
  watchTodos
};