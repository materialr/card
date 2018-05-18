import { shallow } from 'enzyme';
import React from 'react';

import ActionIcon from './action-icon';

const ICON = 'ICON';

test('ActionIcon > Renders default className', () => {
  const wrapper = shallow(
    <ActionIcon icon={ICON} />,
    { disableLifecycleMethods: true },
  );
  const expected = 'material-icons mdc-card__action mdc-card__action--icon';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ActionIcon > Adds additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <ActionIcon className={CLASS_NAME} icon={ICON} />,
    { disableLifecycleMethods: true },
  );
  const expected = `material-icons mdc-card__action mdc-card__action--icon ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('ActionIcon > Renders children', () => {
  const TITLE = 'TITLE';
  const wrapper = shallow(
    <ActionIcon icon={ICON} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const props = wrapper.props();
  const expectedIcon = ICON;
  const expectedTitle = TITLE;

  const actualIcon = props.children;
  const actualTitle = props.title;

  expect(actualIcon).toEqual(expectedIcon);
  expect(actualTitle).toEqual(expectedTitle);
});

test('ActionIcon > Adds extra properties that are passed in', () => {
  const DATA_QA = 'DATA_QA';
  const wrapper = shallow(
    <ActionIcon data-qa={DATA_QA} icon={ICON} />,
    { disableLifecycleMethods: true },
  );
  const expected = DATA_QA;

  const actual = wrapper.props()['data-qa'];

  expect(actual).toBe(expected);
});
