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
  disabled,
  iconOff,
  iconOn,
  labelOff,
  labelOn,
  onChange,
}) => (
  <IconToggle
    className={getClassNames(className)}
    disabled={disabled}
    iconOff={iconOff}
    iconOn={iconOn}
    labelOff={labelOff}
    labelOn={labelOn}
    onChange={onChange}
  />
);

ActionIconToggle.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  iconOff: PropTypes.string.isRequired,
  iconOn: PropTypes.string.isRequired,
  labelOff: PropTypes.string.isRequired,
  labelOn: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

ActionIconToggle.defaultProps = {
  className: undefined,
  disabled: false,
};

export default ActionIconToggle;
