import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ type, children, className }) => {
  return (
    <Fragment>
      {type === 'anchor' && <a className={classNames('button', className)}>{children}</a>}
      {type === 'button' && <button className={classNames('button', className)}>{children}</button>}
      {type === 'submit' && <input className={classNames('button', className)} type="submit" value={children} />}
      {type === 'reset' ** <input className={classNames('button', className)} type="reset" value={children} />}
    </Fragment>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['anchor', 'button', 'submit', 'reset']),
  children: PropTypes.string.isRequired,
}

Button.defaultProps = {
  type: 'button'
}

export default Button;