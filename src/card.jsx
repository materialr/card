import PropTypes from 'prop-types';
import React from 'react';

import '@material/card/mdc-card.scss';

const Card = ({ children, className }) => (
  <div className={`mdc-card ${className}`}>{children}</div>
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
