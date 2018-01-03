import * as React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Clock from '../Clock';


test('Renders Correct Time', () => {
  const wrapper = shallow(<Clock />);
  expect(wrapper.text()).toEqual('Current Time is<FormattedDate />');
//  expect(wrapper.find('FormattedDate')).to.have.length(1);
});