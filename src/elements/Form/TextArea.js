import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextArea = (props) => (
  <div className="control">
    <textarea className={classnames('textarea', props.className)} placeholder={props.placeholder} />
  </div>
);

TextArea.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
}

TextArea.defaultProps = {
  className: '',
  placeholder: '',
}

export default TextArea;