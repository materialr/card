import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import '@material/card/mdc-card.scss';

const getClassName = (className, outlined) => classnames({
  'mdc-card': true,
  'mdc-card--outlined': outlined,
  [className]: !!className,
});

const Card = ({ children, className, outlined, ...props }) => (
  <div className={getClassName(className, outlined)} {...props}>{children}</div>
);

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  outlined: PropTypes.bool,
};

Card.defaultProps = {
  children: undefined,
  className: '',
  outlined: false,
};

export default Card;
