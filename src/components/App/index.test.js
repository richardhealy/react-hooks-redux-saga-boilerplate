import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow} from 'enzyme';

import App from './index';

configure({adapter: new Adapter()});

let rootElement;

beforeAll(() => {
  rootElement = shallow(<App />);
});

describe("<App />", () => {

	test('renders without crashing', () => {}); 

	test('it has a wrapper with class name of `app`', () => {

		expect(rootElement.find('.app').exists()).toBe(true);

	});

});
