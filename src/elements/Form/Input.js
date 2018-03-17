import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = (props) => (
  <div className="control">
    <input type="text" placeholder={props.placeholder} className={classNames('input', props.className)} />
  </div>
);

Input.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
}

Input.defaultProps = {
  placeholder: '',
  className: '',
}

export default Input;