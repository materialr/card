import { shallow } from 'enzyme';
import React from 'react';

import ActionButtons from './action-buttons';

const CHILDREN = <p>CHILDREN</p>;

test('ActionButtons > Renders default className', () => {
  const wrapper = shallow(
    <ActionButtons>{CHILDREN}</ActionButtons>,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-card__action-buttons';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ActionButtons > Adds additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <ActionButtons className={CLASS_NAME}>{CHILDREN}</ActionButtons>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-card__action-buttons ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ActionButtons > Renders children', () => {
  const wrapper = shallow(
    <ActionButtons>{CHILDREN}</ActionButtons>,
    { disableLifecycleMethods: true },
  );
  const expected = CHILDREN;

  const actual = wrapper.props().children;

  expect(actual).toEqual(expected);
});

test('ActionButtons > Adds extra properties that are passed in', () => {
  const DATA_QA = 'DATA_QA';
  const wrapper = shallow(
    <ActionButtons data-qa={DATA_QA}>{CHILDREN}</ActionButtons>,
    { disableLifecycleMethods: true },
  );
  const expected = DATA_QA;

  const actual = wrapper.props()['data-qa'];

  expect(actual).toEqual(expected);
});
