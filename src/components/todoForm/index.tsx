import React from 'react';
//import { input, select, textarea } from "react";
import { Field } from 'redux-form';
import {ITodo} from '../../types';
import styles from './todoForm.module.scss';

interface ITodoFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
  initialValues?: ITodo
};

const TodoForm: React.SFC <ITodoFormProps> = ({handleSubmit}) => (
  <form className={styles.form} onSubmit={handleSubmit}>
     <div>
       
        <Field name="id" component="input" type="hidden" />
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <Field name="name" component="input" type="text" />
        </div>
        <div className={styles.field}>
          <label htmlFor="description">description</label>
          <Field name="description" component="textarea" />
        </div>
        
      </div>
      <button className={styles.button} type="submit">Submit</button>
  </form>
);

export default TodoForm;


