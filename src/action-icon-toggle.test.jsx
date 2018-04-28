import { shallow } from 'enzyme';
import React from 'react';

import ActionIconToggle from './action-icon-toggle';

const ICON_OFF = 'ICON_OFF';
const ICON_ON = 'ICON_ON';
const LABEL_OFF = 'LABEL_OFF';
const LABEL_ON = 'LABEL_ON';
const ON_CHANGE = () => 'ON_CHANGE';

test('ActionIconToggle > Renders default className', () => {
  const wrapper = shallow(
    <ActionIconToggle
      iconOff={ICON_OFF}
      iconOn={ICON_ON}
      labelOff={LABEL_OFF}
      labelOn={LABEL_ON}
      onChange={ON_CHANGE}
    />,
    { disableLifecycleMethods: true },
  );
  const expected = 'material-icons mdc-card__action mdc-card__action--icon';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ActionIconToggle > Adds additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <ActionIconToggle
      className={CLASS_NAME}
      iconOff={ICON_OFF}
      iconOn={ICON_ON}
      labelOff={LABEL_OFF}
      labelOn={LABEL_ON}
      onChange={ON_CHANGE}
    />,
    { disableLifecycleMethods: true },
  );
  const expected = `material-icons mdc-card__action mdc-card__action--icon ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ActionIconToggle > Renders all props', () => {
  const DISABLED = true;
  const wrapper = shallow(
    <ActionIconToggle
      iconOff={ICON_OFF}
      iconOn={ICON_ON}
      labelOff={LABEL_OFF}
      labelOn={LABEL_ON}
      onChange={ON_CHANGE}
      disabled={DISABLED}
    />,
    { disableLifecycleMethods: true },
  );
  const props = wrapper.props();
  const expectedDisabled = DISABLED;
  const expectedIconOff = ICON_OFF;
  const expectedIconOn = ICON_ON;
  const expectedLabelOff = LABEL_OFF;
  const expectedLabelOn = LABEL_ON;

  const actualDisabled = props.disabled;
  const actualIconOff = props.iconOff;
  const actualIconOn = props.iconOn;
  const actualLabelOff = props.labelOff;
  const actualLabelOn = props.labelOn;

  expect(actualDisabled).toEqual(expectedDisabled);
  expect(actualLabelOff).toEqual(expectedLabelOff);
  expect(actualLabelOn).toEqual(expectedLabelOn);
  expect(actualIconOff).toEqual(expectedIconOff);
  expect(actualIconOn).toEqual(expectedIconOn);
});
