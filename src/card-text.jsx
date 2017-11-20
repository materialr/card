import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassName = className => classnames({
  'mdc-card__supporting-text': true,
  [className]: !!className,
});

const CardText = ({ className, text }) => (
  <section className={getClassName(className)}>
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
