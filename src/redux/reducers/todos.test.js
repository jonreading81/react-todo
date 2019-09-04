import reducer from './todos';
import {
  TODO_ADD,
  TODO_DELETE,
  TODO_EDIT,
} from '../types/todos';

const getAddAction = payload => (
  {
    type: TODO_ADD,
    payload
  }
) ;

const getDeleteAction = id => (
  {
    type: TODO_DELETE,
    payload: {
      id
    }
  }
);

const editTodo = (payload) => ({
  type:TODO_EDIT,
  payload
});

describe('Todos reducer', () => {
  it('should have 3 items as inital state', () => {
    expect(reducer()).to.have.lengthOf(3);
  });

  describe('AddItem', () => {
    it('should add item', () => {
      const payload = {
        name: 'new item',
        description: 'description'
      };
    
      expect(reducer([], getAddAction(payload))[0]).to.include({
        ...payload,
        id: 1,
      })
    });

    it('should assign an id higher than those present item', () => {
      const payload = {
        name: 'new item',
        description: 'description'
      };

      const items = [
        {id:6}
      ];
    
      expect(reducer(items, getAddAction(payload))[1].id).to.equal(7);
    });
  })

  it('should delete the item based on the id', () => {
    const items = [
      {id:1},
      {id:6}
    ];
    expect(reducer(items,getDeleteAction(1))).to.eql([{id:6}])
  });

  it('should edit the item provided using the id', () => {
    const items = [
      {id:1},
      {id:6}
    ];
    expect(reducer(items,editTodo({id:1, name:'test'}))).to.eql([
      {id:1, name:'test'},
      {id:6}
    ]);
  });


});