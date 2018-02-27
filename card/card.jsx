import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import '@material/card/mdc-card.scss';

const getClassName = (className, isStroked) => classnames({
  'mdc-card': true,
  'mdc-card--stroked': isStroked,
  [className]: !!className,
});

const Card = ({ children, className, isStroked }) => (
  <div className={getClassName(className, isStroked)}>{children}</div>
);

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isStroked: PropTypes.bool,
};

Card.defaultProps = {
  children: undefined,
  className: '',
  isStroked: false,
};

export default Card;
