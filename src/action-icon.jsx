import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'material-icons': true,
  'mdc-card__action': true,
  'mdc-card__action--icon': true,
  [className]: !!className,
});

const ActionIcon = ({ className, icon, title, ...props }) => (
  <i
    className={getClassNames(className)}
    role="button"
    tabIndex="0"
    title={title}
    {...props}
  >
    {icon}
  </i>
);

ActionIcon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string,
};

ActionIcon.defaultProps = {
  className: undefined,
  title: undefined,
};

export default ActionIcon;
