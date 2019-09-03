import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';

describe('App', () => {

  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<App />);
  });

  it('should include the header conponent', () => {
    expect(wrapper.find(Header)).to.have.lengthOf(1);
  });

  it('should include the footer conponent', () => {
    expect(wrapper.find(Footer)).to.have.lengthOf(1);
  });
});
