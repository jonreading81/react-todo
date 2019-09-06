import { all } from 'redux-saga/effects';
import {watchTodos} from './todos';


export default function* rootSaga() {
   yield all([
    watchTodos()
   ]);
}