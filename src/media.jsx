import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const MEDIA_ASPECT_RATIO_1_1 = 'MEDIA_ASPECT_RATIO_1_1';
export const MEDIA_ASPECT_RATIO_16_9 = 'MEDIA_ASPECT_RATIO_16_9';

const getClassNames = (aspectRatio, className) => classnames({
  'mdc-card__media': true,
  'mdc-card__media--16-9': aspectRatio === MEDIA_ASPECT_RATIO_16_9,
  'mdc-card__media--square': aspectRatio === MEDIA_ASPECT_RATIO_1_1,
  [className]: !!className,
});

const Media = ({ aspectRatio, children, className }) => (
  <div className={getClassNames(aspectRatio, className)}>{children}</div>
);

Media.propTypes = {
  aspectRatio: PropTypes.oneOf([MEDIA_ASPECT_RATIO_1_1, MEDIA_ASPECT_RATIO_16_9]),
  children: PropTypes.node,
  className: PropTypes.string,
};

Media.defaultProps = {
  aspectRatio: MEDIA_ASPECT_RATIO_16_9,
  children: undefined,
  className: undefined,
};

export default Media;
