import IconToggle from '@materialr/icon-toggle';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'material-icons': true,
  'mdc-card__action': true,
  'mdc-card__action--icon': true,
  [className]: !!className,
});

const ActionIconToggle = ({
  className,
  iconOff,
  iconOn,
  labelOff,
  labelOn,
  onChange,
  rippleEnabled,
}) => (
  <IconToggle
    className={getClassNames(className)}
    iconOff={iconOff}
    iconOn={iconOn}
    labelOff={labelOff}
    labelOn={labelOn}
    onChange={onChange}
    rippleEnabled={rippleEnabled}
  />
);

ActionIconToggle.propTypes = {
  className: PropTypes.string,
  iconOff: PropTypes.string.isRequired,
  iconOn: PropTypes.string.isRequired,
  labelOff: PropTypes.string.isRequired,
  labelOn: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rippleEnabled: PropTypes.bool,
};

ActionIconToggle.defaultProps = {
  className: undefined,
  rippleEnabled: false,
};

export default ActionIconToggle;
