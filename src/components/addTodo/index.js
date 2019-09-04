import React from 'react';
import { Field } from 'redux-form'

export default ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
     <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
  </form>
);


