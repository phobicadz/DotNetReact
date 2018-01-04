/*jshint esversion: 6 */

import * as React from 'react';
import renderer from 'react-test-renderer';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Clock from '../Clock';
import RandomUsers from '../RandomUsers';
import "isomorphic-fetch";
import { createWaitForElement } from 'enzyme-wait';

const waitForUsers = createWaitForElement('#flang',2000,10)


test('Renders Time Component', () => {
  const wrapper = shallow(<Clock />);
  expect(wrapper.find('FormattedDate')).toHaveLength(1);

  console.log(shallow(<Clock />).debug())
});

// should be async which is a total bitch to test for some fucking reason
test('Check 10 people are shown', () => {
  const component = mount(<RandomUsers />);
  return waitForUsers(component).then(
    (componentReady) => {
      console.log(componentReady.debug())
    }
  )
});