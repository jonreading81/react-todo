import React from 'react';
import AddTodo from './index';
import { reduxForm } from 'redux-form';

export default  reduxForm({
  // a unique name for the form
  form: 'add-todo'
})(AddTodo);