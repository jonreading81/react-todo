import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('Header', () => {

  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders contain header text', () => {
    const context = shallow(<Header />);
    expect(context.find('header h1').text())
      .to.equal('Todos App');
  });
});
