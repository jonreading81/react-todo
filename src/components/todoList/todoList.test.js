import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './index';
import sinon from 'sinon';
import { Link } from 'react-router-dom';

const items = [
  {id: 1, name: 'test-1', description:' description'},
  {id: 2, name: 'test-2', description:' description'}
];

describe("Todo list component", () => {
  it('should display items as list items',() => {

    const wrapper = shallow(<TodoList items={items}/>);
    expect(wrapper.find('li')).to.have.lengthOf(2);
  });

  it('should provide a button to delete the items', () => {
    const spyDelete = sinon.spy();
    const wrapper = shallow(<TodoList items={items} deleteItem={spyDelete}/>);
    wrapper.find('li').first().find('.delete-item').simulate('click');
    expect(spyDelete.args[0][0]).to.eql(1);
  });

  it('should provide a link to edit the item', () => {
    const wrapper = shallow(<TodoList items={items}/>);
    expect(wrapper.find('li').first().find(Link).prop('to')).to.equal('/edit/1');
  });
})
