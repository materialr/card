import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-card__action-buttons': true,
  [className]: !!className,
});

const ActionButtons = ({ children, className, ...props }) => (
  <div className={getClassNames(className)} {...props}>
    {children}
  </div>
);

ActionButtons.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ActionButtons.defaultProps = {
  className: '',
};

export default ActionButtons;
