import { shallow } from 'enzyme';
import React from 'react';

import MediaContent from './media-content';

const CHILDREN = <p>CHILDREN</p>;

test('MediaContent > Renders default className', () => {
  const wrapper = shallow(
    <MediaContent>{CHILDREN}</MediaContent>,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-card__media-content';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('MediaContent > Adds additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <MediaContent className={CLASS_NAME}>{CHILDREN}</MediaContent>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-card__media-content ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('MediaContent > Renders children', () => {
  const wrapper = shallow(
    <MediaContent>{CHILDREN}</MediaContent>,
    { disableLifecycleMethods: true },
  );
  const expected = CHILDREN;

  const actual = wrapper.props().children;

  expect(actual).toEqual(expected);
});
