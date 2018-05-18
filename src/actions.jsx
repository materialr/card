import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = (className, fullBleed) => classnames({
  'mdc-card__actions': true,
  'mdc-card__actions--full-bleed': fullBleed,
  [className]: !!className,
});

const Actions = ({ children, className, fullBleed, ...props }) => (
  <div className={getClassNames(className, fullBleed)} {...props}>{children}</div>
);

Actions.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fullBleed: PropTypes.bool,
};

Actions.defaultProps = {
  className: undefined,
  fullBleed: false,
};

export default Actions;
