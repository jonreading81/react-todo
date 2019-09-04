import { all } from 'redux-saga/effects';
import {watchTodoAdd} from './todos';


export default function* rootSaga() {
   yield all([
    watchTodoAdd()
   ]);
}