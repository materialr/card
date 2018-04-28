import { shallow } from 'enzyme';
import React from 'react';

import Card from './card';

const CHILDREN = <p>CHILDREN</p>;

test('Card > Renders default className', () => {
  const wrapper = shallow(<Card>{CHILDREN}</Card>, { disableLifecycleMethods: true });
  const expected = 'mdc-card';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Card > Adds additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Card className={CLASS_NAME} outlined>{CHILDREN}</Card>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-card mdc-card--outlined ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Card > Renders children', () => {
  const wrapper = shallow(<Card>{CHILDREN}</Card>, { disableLifecycleMethods: true });
  const expected = CHILDREN;

  const actual = wrapper.props().children;

  expect(actual).toEqual(expected);
});
