import { shallow } from 'enzyme';
import React from 'react';

import ActionIcons from './action-icons';

const CHILDREN = <p>CHILDREN</p>;

test('ActionIcons > Renders default className', () => {
  const wrapper = shallow(
    <ActionIcons>{CHILDREN}</ActionIcons>,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-card__action-icons';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ActionIcons > Adds additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <ActionIcons className={CLASS_NAME}>{CHILDREN}</ActionIcons>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-card__action-icons ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ActionIcons > Renders children', () => {
  const wrapper = shallow(
    <ActionIcons>{CHILDREN}</ActionIcons>,
    { disableLifecycleMethods: true },
  );
  const expected = CHILDREN;

  const actual = wrapper.props().children;

  expect(actual).toEqual(expected);
});

test('ActionIcons > Adds extra properties that are passed in', () => {
  const DATA_QA = 'DATA_QA';
  const wrapper = shallow(
    <ActionIcons data-qa={DATA_QA}>{CHILDREN}</ActionIcons>,
    { disableLifecycleMethods: true },
  );
  const expected = DATA_QA;

  const actual = wrapper.props()['data-qa'];

  expect(actual).toBe(expected);
});
