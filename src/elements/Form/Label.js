import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Label = (props) => (
  <label className={classNames('label', props.className)}>
    {props.children}
  </label>
);

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
}

Label.defaultProps = {
  className: '',
}

export default Label;