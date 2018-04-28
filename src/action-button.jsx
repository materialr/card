import Button from '@materialr/button';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-button': true,
  'mdc-card__action': true,
  'mdc-card__action--button': true,
  [className]: !!className,
});

const ActionButton = ({
  children,
  className,
  disabled,
  onClick,
  ripple,
}) => (
  <Button
    className={getClassNames(className)}
    disabled={disabled}
    onClick={onClick}
    ripple={ripple}
  >
    {children}
  </Button>
);

ActionButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  ripple: PropTypes.bool,
};

ActionButton.defaultProps = {
  className: undefined,
  disabled: false,
  onClick: undefined,
  ripple: false,
};

export default ActionButton;
