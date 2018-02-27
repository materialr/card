import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-card__media-content': true,
  [className]: !!className,
});

const MediaContent = ({ children, className }) => (
  <div className={getClassNames(className)}>{children}</div>
);

MediaContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

MediaContent.defaultProps = {
  className: undefined,
};

export default MediaContent;
