import TodoForm from './index';
import { reduxForm } from 'redux-form';

export default  reduxForm({
  form: 'add-form'
})(TodoForm);