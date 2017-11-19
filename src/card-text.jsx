import PropTypes from 'prop-types';
import React from 'react';

const CardText = ({ className, text }) => (
  <section className={`mdc-card__supporting-text ${className}`}>
    {text}
  </section>
);

CardText.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

CardText.defaultProps = {
  className: '',
};

export default CardText;
