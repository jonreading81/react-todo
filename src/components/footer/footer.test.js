import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';
import { Link } from 'react-router-dom'

describe('Footer', () => {
  it('should contain navigation element', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('nav')).to.have.length(1)
  });

  it('first link should contain a link to the list of todos', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(Link).first().prop('to')).to.equal('/');
  });

  it('second link should contain a link to add a todo item', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(Link).at(1).prop('to')).to.equal('/add');
  })
 
})