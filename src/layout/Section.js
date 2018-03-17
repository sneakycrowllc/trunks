import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';

const Section = (props) => (
  <section className={classname('section', props.className)}>
    {props.children}
  </section>
);

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Section.defaultProps = {
  className: '',
}

export default Section;