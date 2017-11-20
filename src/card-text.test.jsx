import { shallow } from 'enzyme';
import React from 'react';

import CardText from './card-text';

const TEXT = 'TEXT';

test('CardText > Renders the default className', () => {
  const wrapper = shallow(<CardText text={TEXT} />, { disableLifecycleMethods: true });
  const expected = 'mdc-card__supporting-text';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('CardText > Renders additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <CardText className={CLASS_NAME} text={TEXT} />,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-card__supporting-text ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('CardText > Renders the correct text', () => {
  const wrapper = shallow(<CardText text={TEXT} />, { disableLifecycleMethods: true });
  const expected = TEXT;

  const actual = wrapper.text();

  expect(actual).toBe(expected);
});
