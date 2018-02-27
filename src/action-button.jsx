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
  rippleCentered,
  rippleEnabled,
}) => (
  <Button
    className={getClassNames(className)}
    disabled={disabled}
    onClick={onClick}
    rippleCentered={rippleCentered}
    rippleEnabled={rippleEnabled}
  >
    {children}
  </Button>
);

ActionButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  rippleCentered: PropTypes.bool,
  rippleEnabled: PropTypes.bool,
};

ActionButton.defaultProps = {
  className: undefined,
  disabled: false,
  onClick: undefined,
  rippleCentered: false,
  rippleEnabled: false,
};

export default ActionButton;
