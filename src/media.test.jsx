import { shallow } from 'enzyme';
import React from 'react';

import Media, { MEDIA_ASPECT_RATIO_1_1, MEDIA_ASPECT_RATIO_16_9 } from './media';

const CHILDREN = <p>CHILDREN</p>;

test('Media > Renders default className', () => {
  const wrapper = shallow(
    <Media>{CHILDREN}</Media>,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-card__media mdc-card__media--16-9';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Media > Adds additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Media className={CLASS_NAME}>{CHILDREN}</Media>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-card__media mdc-card__media--16-9 ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Media > Adds the 1:1 aspect ratio className', () => {
  const wrapper = shallow(
    <Media aspectRatio={MEDIA_ASPECT_RATIO_1_1}>{CHILDREN}</Media>,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-card__media mdc-card__media--square';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Media > Adds the 16:9 aspect ratio className', () => {
  const wrapper = shallow(
    <Media aspectRatio={MEDIA_ASPECT_RATIO_16_9}>{CHILDREN}</Media>,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-card__media mdc-card__media--16-9';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Media > Renders children', () => {
  const wrapper = shallow(
    <Media>{CHILDREN}</Media>,
    { disableLifecycleMethods: true },
  );
  const expected = CHILDREN;

  const actual = wrapper.props().children;

  expect(actual).toEqual(expected);
});
