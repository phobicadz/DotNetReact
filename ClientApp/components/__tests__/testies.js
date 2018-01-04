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


const waitForSample = createWaitForElement('#people-images');
const randomUserComponent = mount(<RandomUsers />);


test('Renders Time Component', () => {
  const wrapper = shallow(<Clock />);
  expect(wrapper.find('FormattedDate')).toHaveLength(1);

  console.log(shallow(<Clock />).debug())
});

// should be async which is a total bitch to test for some fucking reason
it('Check 10 people are shown', () => {

  waitForSample(randomUserComponent).then(randomUserComponent => console.log(randomUserComponent.debug()));
 
});