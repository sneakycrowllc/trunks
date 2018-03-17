import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Input = (props) => (
  <div className="control">
    <input type="text" placeholder={props.placeholder} className={classnames('input', props.className)} />
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