import React from 'react';
import TouchFeedback from 'rmc-feedback';
import classNames from 'classnames';
import TouchableOpacityProps from './interface';

const prefixCls = 'osdoc-touchable-opacity';

const TouchableOpacity: React.FC<TouchableOpacityProps> = props => {
  const { children, disabled, activeClassName, ...rest } = props;
  const classes = classNames(prefixCls, activeClassName, {
    [`${prefixCls}-default`]: !disabled,
    [`${prefixCls}-disabled`]: disabled,
  });
  return (
    <TouchFeedback disabled={disabled} activeClassName={classes}>
      <div {...rest}>{children}</div>
    </TouchFeedback>
  );
};

TouchableOpacity.displayName = 'TouchableOpacity';

TouchableOpacity.defaultProps = {
  disabled: false,
};

export default TouchableOpacity;
