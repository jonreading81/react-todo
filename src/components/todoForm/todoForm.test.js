import React from 'react';
import { shallow } from 'enzyme';
import TodoForm from './index';
import { Field } from 'redux-form';
import sinon from 'sinon';

describe('TodoForm', () => {
  it('should have a field for name', () => {
    const wrapper = shallow(<TodoForm />);
   expect(wrapper.find(Field).first().prop('name')).to.equal('name');
  });

  it('should call handleSubmit when the form is submitted', () => {
    const handleSubmit = sinon.spy();
    const wrapper = shallow(<TodoForm handleSubmit={handleSubmit}/>);
    wrapper.find('form').simulate('submit')
    expect(handleSubmit.called).to.be.true;
  });
  
});