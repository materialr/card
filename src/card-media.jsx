import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassName = (className, size) => classnames({
  'mdc-card__media-item': true,
  [className]: !!className,
  [`mdc-card__media-item--${size}x`]: !!size,
});

const CardMedia = ({ alt, className, size, source }) => (
  <img alt={alt} className={getClassName(className, size)} src={source} />
);

CardMedia.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf([1, 2, 3]),
  source: PropTypes.string.isRequired,
};

CardMedia.defaultProps = {
  className: '',
  size: undefined,
};

export default CardMedia;
