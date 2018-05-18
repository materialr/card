import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-card__action-icons': true,
  [className]: !!className,
});

const ActionIcons = ({ children, className, ...props }) => (
  <div className={getClassNames(className)} {...props}>
    {children}
  </div>
);

ActionIcons.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ActionIcons.defaultProps = {
  className: '',
};

export default ActionIcons;
