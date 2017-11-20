import { shallow } from 'enzyme';
import React from 'react';

import CardMedia from './card-media';

const ALT = 'ALT';
const SOURCE = 'SOURCE';

test('CardMedia > Renders the default className', () => {
  const wrapper = shallow(
    <CardMedia alt={ALT} source={SOURCE} />,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-card__media-item';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('CardMedia > Renders additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <CardMedia alt={ALT} className={CLASS_NAME} source={SOURCE} />,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-card__media-item ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('CardMedia > Renders the \'size\' className', () => {
  const SIZE = 2;
  const wrapper = shallow(
    <CardMedia alt={ALT} size={SIZE} source={SOURCE} />,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-card__media-item mdc-card__media-item--${SIZE}x`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('CardMedia > Renders the \'alt\' prop', () => {
  const wrapper = shallow(
    <CardMedia alt={ALT} source={SOURCE} />,
    { disableLifecycleMethods: true },
  );
  const expected = ALT;

  const actual = wrapper.props().alt;

  expect(actual).toBe(expected);
});

test('CardMedia > Renders the \'source\' prop', () => {
  const wrapper = shallow(
    <CardMedia alt={ALT} source={SOURCE} />,
    { disableLifecycleMethods: true },
  );
  const expected = SOURCE;

  const actual = wrapper.props().src;

  expect(actual).toBe(expected);
});
