import React from 'react';
import { ButtonProps } from './interface';

const Button: React.FC<ButtonProps> = (props, ref) => {
  const { type, size, className, loading, children, ...rest } = props;
  return <div>{children}</div>;
};

Button.displayName = 'Button';

Button.defaultProps = {};

export default Button;
