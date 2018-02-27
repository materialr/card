import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = (className, isFullBleed) => classnames({
  'mdc-card__actions': true,
  'mdc-card__actions--full-bleed': isFullBleed,
  [className]: !!className,
});

const Actions = ({ children, className, isFullBleed }) => (
  <div className={getClassNames(className, isFullBleed)}>{children}</div>
);

Actions.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isFullBleed: PropTypes.bool,
};

Actions.defaultProps = {
  className: undefined,
  isFullBleed: false,
};

export default Actions;
