import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';

const Container = (props) => (
  <div className={classname('container', props.className)}>
    {props.children}
  </div>
);

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Container.defaultProps = {
  className: '',
}

export default Container;