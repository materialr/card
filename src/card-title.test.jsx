import { shallow } from 'enzyme';
import React from 'react';

import CardTitle from './card-title';

const TITLE = 'TITLE';

test('CardTitle > Renders the default className', () => {
  const wrapper = shallow(<CardTitle title={TITLE} />, { disableLifecycleMethods: true });
  const expected = 'mdc-card__primary';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('CardTitle > Renders additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <CardTitle className={CLASS_NAME} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-card__primary ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('CardTitle > Renders the title', () => {
  const wrapper = shallow(<CardTitle title={TITLE} />, { disableLifecycleMethods: true });
  const expected = TITLE;

  const actual = wrapper.find('h1').text();

  expect(actual).toBe(expected);
});

test('CardTitle > Renders the title\'s default classNames', () => {
  const wrapper = shallow(<CardTitle title={TITLE} />, { disableLifecycleMethods: true });
  const expected = 'mdc-card__title mdc-card__title--large';

  const actual = wrapper.find('h1').props().className;

  expect(actual).toBe(expected);
});

test('CardTitle > Removes the \'large\' className', () => {
  const wrapper = shallow(
    <CardTitle large={false} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-card__title';

  const actual = wrapper.find('h1').props().className;

  expect(actual).toBe(expected);
});

test('CardTitle > Does not render the subtitle by default', () => {
  const wrapper = shallow(<CardTitle title={TITLE} />, { disableLifecycleMethods: true });
  const expected = false;

  const actual = wrapper.find('h2').exists();

  expect(actual).toBe(expected);
});

test('CardTitle > Renders the subTitle', () => {
  const SUB_TITLE = 'SUB_TITLE';
  const wrapper = shallow(
    <CardTitle subTitle={SUB_TITLE} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = SUB_TITLE;

  const actual = wrapper.find('h2').text();

  expect(actual).toBe(expected);
});

test('CardTitle > Renders the default className for the subTitle', () => {
  const SUB_TITLE = 'SUB_TITLE';
  const wrapper = shallow(
    <CardTitle subTitle={SUB_TITLE} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-card__subtitle';

  const actual = wrapper.find('h2').props().className;

  expect(actual).toBe(expected);
});
