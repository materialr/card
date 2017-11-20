import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import '@material/card/mdc-card.scss';

const getClassName = className => classnames({
  'mdc-card': true,
  [className]: !!className,
});

const Card = ({ children, className }) => (
  <div className={getClassName(className)}>{children}</div>
);

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Card.defaultProps = {
  children: undefined,
  className: '',
};

export default Card;
