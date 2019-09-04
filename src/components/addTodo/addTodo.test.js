import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from './index';
import { Field } from 'redux-form';
import sinon from 'sinon';

describe('Add Todo', () => {
  it('should have a field for name', () => {
    const wrapper = shallow(<AddTodo />);
   // expect(wrapper.find(Field).first().prop('name')).to.equal('name');
   expect(wrapper.find(Field)).to.have.lengthOf(1);
  });

  it('should call handleSubmit when the form is submitted', () => {
    const handleSubmit = sinon.spy();
    const wrapper = shallow(<AddTodo handleSubmit={handleSubmit}/>);
    wrapper.find('form').simulate('submit')
    expect(handleSubmit.called).to.be.true;
  });
  
});