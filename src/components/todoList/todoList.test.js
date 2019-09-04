import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './index';

describe("Todo list component", () => {
  it('should display items as list items',() => {
    const items = [
      {id: 1, name: 'test-1', description:' description'},
      {id: 2, name: 'test-2', description:' description'}
    ];

    const wrapper = shallow(<TodoList items={items}/>);
    expect(wrapper.find('li')).to.have.lengthOf(2);
  })
})
