import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Field = (props) => (
  <div className={classNames('field', props.className)}>
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