import * as React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { Clock as cock } from '../Clock';

const dispatch = () => null;

it('renders <App /> container', () => {
    const wrapper = shallow(<cock dispatch={dispatch} loaded />);
    expect(wrapper.find('div').length).toBe(0);
  });