import { shallow } from 'enzyme';
import React from 'react';

import CardActions from './card-actions';

const EMPTY = 'EMPTY';
const ON_CLICK = () => 'ON_CLICK';
const TITLE = 'TITLE';
const ACTIONS = [{ onClick: ON_CLICK, title: TITLE }, { title: EMPTY }];

test('CardActions > Renders the default className', () => {
  const wrapper = shallow(<CardActions actions={ACTIONS} />, { disableLifecycleMethods: true });
  const expected = 'mdc-card__actions';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('CardActions > Renders additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <CardActions actions={ACTIONS} className={CLASS_NAME} />,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-card__actions ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('CardActions > Renders an action with an onClick', () => {
  const wrapper = shallow(<CardActions actions={ACTIONS} />, { disableLifecycleMethods: true });
  const expectedOnClick = ON_CLICK;
  const expectedTitle = TITLE;

  const button = wrapper.find('button').at(0);
  const buttonProps = button.props();
  const actualOnClick = buttonProps.onClick;
  const actualTitle = button.text();

  expect(actualOnClick).toBe(expectedOnClick);
  expect(actualTitle).toBe(expectedTitle);
});

test('CardActions > Renders an action without an onClick', () => {
  const wrapper = shallow(<CardActions actions={ACTIONS} />, { disableLifecycleMethods: true });
  const expectedOnClick = undefined;
  const expectedTitle = EMPTY;

  const button = wrapper.find('button').at(1);
  const buttonProps = button.props();
  const actualOnClick = buttonProps.onClick;
  const actualTitle = button.text();

  expect(actualOnClick).toBe(expectedOnClick);
  expect(actualTitle).toBe(expectedTitle);
});
