import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassName = className => classnames({
  'mdc-card__primary': true,
  [className]: !!className,
});

const getTitleClassName = large => classnames({
  'mdc-card__title': true,
  'mdc-card__title--large': large,
});

const CardTitle = ({ className, large, subTitle, title }) => (
  <section className={getClassName(className)}>
    <h1 className={getTitleClassName(large)}>{title}</h1>
    {subTitle && <h2 className="mdc-card__subtitle">{subTitle}</h2>}
  </section>
);

CardTitle.propTypes = {
  className: PropTypes.string,
  large: PropTypes.bool,
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

CardTitle.defaultProps = {
  className: '',
  large: true,
  subTitle: '',
};

export default CardTitle;
