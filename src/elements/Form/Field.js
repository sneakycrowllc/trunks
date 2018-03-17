import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Field = (props) => (
  <div className={classnames('field', props.className)}>
    {props.children}
  </div>
);

Field.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Field.defaultProps = {
  className: '',
}

export default Field;