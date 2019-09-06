import React from 'react';
//import { input, select, textarea } from "react";
import { Field } from 'redux-form';
import {ITodo} from '../../types';


interface ITodoFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
  initialValues?: ITodo
};

const TodoForm: React.SFC <ITodoFormProps> = ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
     <div>
        <Field name="id" component="input" type="hidden" />
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text" />
        <label htmlFor="description">description</label>
        <Field name="description" component="textarea" />
        
      </div>
      <button type="submit">Submit</button>
  </form>
);

export default TodoForm;


