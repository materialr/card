import { shallow } from 'enzyme';
import React from 'react';

import ActionButton from './action-button';

const CHILDREN = <p>CHILDREN</p>;

test('ActionButton > Renders default className', () => {
  const wrapper = shallow(
    <ActionButton>{CHILDREN}</ActionButton>,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-button mdc-card__action mdc-card__action--button';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ActionButton > Adds additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <ActionButton className={CLASS_NAME}>{CHILDREN}</ActionButton>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-button mdc-card__action mdc-card__action--button ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ActionButton > Renders all props', () => {
  const DISABLED = true;
  const ON_CLICK = () => 'ON_CLICK';
  const RIPPLE_CENTERED = true;
  const RIPPLE_ENABLED = true;
  const wrapper = shallow(
    <ActionButton
      disabled={DISABLED}
      onClick={ON_CLICK}
      rippleCentered={RIPPLE_CENTERED}
      rippleEnabled={RIPPLE_ENABLED}
    >
      {CHILDREN}
    </ActionButton>,
    { disableLifecycleMethods: true },
  );
  const props = wrapper.props();
  const expectedChildren = CHILDREN;
  const expectedDisabled = DISABLED;
  const expectedOnClick = ON_CLICK;
  const expectedRippleCentered = RIPPLE_CENTERED;
  const expectedRippleEnabled = RIPPLE_ENABLED;

  const actualChildren = props.children;
  const actualDisabled = props.disabled;
  const actualOnClick = props.onClick;
  const actualRippleCentered = props.rippleCentered;
  const actualRippleEnabled = props.rippleEnabled;

  expect(actualChildren).toEqual(expectedChildren);
  expect(actualDisabled).toEqual(expectedDisabled);
  expect(actualOnClick).toEqual(expectedOnClick);
  expect(actualRippleCentered).toEqual(expectedRippleCentered);
  expect(actualRippleEnabled).toEqual(expectedRippleEnabled);
});
