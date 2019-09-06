import React from 'react';
import { Field } from 'redux-form';

interface ITodoFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
};

const TodoForm: React.SFC <ITodoFormProps> = ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
     <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
  </form>
);

export default TodoForm;


