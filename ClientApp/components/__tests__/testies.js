/*jshint esversion: 6 */
import * as React from 'react';
import sinon from 'sinon';
import "isomorphic-fetch";
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// components to test
import Clock from '../Clock';
import RandomUsers from '../RandomUsers';
import Example from '../Example';

// Tests go here
test('Renders Time Component', () => {
  const wrapper = shallow(<Clock />);
  expect(wrapper.find('FormattedDate')).toHaveLength(1);
});


it('Still loading...', () => {
  const wrapper = shallow(<RandomUsers />);
  expect(wrapper.state('isLoading')).toEqual(true);
});


it('Random Users loaded with correct amount', (done) => {
  const wrapper = shallow(<RandomUsers />);
  // give users a chance to load...
  setTimeout(() => {
    expect(wrapper.state('isLoading')).toEqual(false);
    expect(wrapper.state('pictures').length).toEqual(wrapper.state('peopleToDisplay'));
    done();
  },500);
});

it('Example Test',(done) => {
  const wrapper = shallow(<Example />);
  setTimeout(() => {
    done();
  },300);
});

