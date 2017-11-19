import PropTypes from 'prop-types';
import React from 'react';

const CardActions = ({ actions, className }) => (
  <section className={`mdc-card__actions ${className}`}>
    {actions.map(({ onClick, title }, index) => (
      <button
        className="mdc-button mdc-button--compact mdc-card__action"
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        onClick={onClick}
      >
        {title}
      </button>))}
  </section>
);

CardActions.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired,
  })).isRequired,
  className: PropTypes.string,
};

CardActions.defaultProps = {
  className: '',
};

export default CardActions;
