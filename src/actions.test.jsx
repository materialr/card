import { shallow } from 'enzyme';
import React from 'react';

import Actions from './actions';

const CHILDREN = <p>CHILDREN</p>;

test('Actions > Renders default className', () => {
  const wrapper = shallow(
    <Actions>{CHILDREN}</Actions>,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-card__actions';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Actions > Adds additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Actions className={CLASS_NAME} fullBleed>{CHILDREN}</Actions>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-card__actions mdc-card__actions--full-bleed ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Actions > Renders children', () => {
  const wrapper = shallow(
    <Actions>{CHILDREN}</Actions>,
    { disableLifecycleMethods: true },
  );
  const expected = CHILDREN;

  const actual = wrapper.props().children;

  expect(actual).toEqual(expected);
});

test('Actions > Adds extra properties that are passed in', () => {
  const DATA_QA = 'DATA_QA';
  const wrapper = shallow(
    <Actions data-qa={DATA_QA}>{CHILDREN}</Actions>,
    { disableLifecycleMethods: true },
  );
  const expected = DATA_QA;

  const actual = wrapper.props()['data-qa'];

  expect(actual).toBe(expected);
});
