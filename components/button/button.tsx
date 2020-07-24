import React from 'react';
import classNames from 'classnames';
import { ButtonProps, NativeButtonProps } from './interface';

type Loading = number | boolean;

const prefixCls = 'osdoc-button';

const Button: React.FC<ButtonProps> = (props, ref) => {
  const { type, size, className, loading, children, ...rest } = props;

  const [innerLoading, setLoading] = React.useState<Loading>(!!loading);
  const buttonRef = (ref as any) || React.createRef<HTMLElement>();
  const delayTimeoutRef = React.useRef<number>();

  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-${size}`]: size,
  });

  // =============== Update Loading ===============
  let loadingOrDelay: Loading;
  if (typeof loading === 'object' && loading.delay) {
    loadingOrDelay = loading.delay || true;
  } else {
    loadingOrDelay = !!loading;
  }

  React.useEffect(() => {
    clearTimeout(delayTimeoutRef.current);
    if (typeof loadingOrDelay === 'number') {
      delayTimeoutRef.current = window.setTimeout(() => {
        setLoading(loadingOrDelay);
      }, loadingOrDelay);
    } else {
      setLoading(loadingOrDelay);
    }
  }, [loadingOrDelay]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    const { onClick } = props;
    if (innerLoading) {
      return;
    }
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
    }
  };

  const { htmlType } = rest as NativeButtonProps;

  const buttonNode = (
    <button type={htmlType} className={classes} onClick={handleClick} ref={buttonRef}>
      {children}
    </button>
  );
  return buttonNode;
};

Button.displayName = 'Button';

Button.defaultProps = {
  htmlType: 'button' as ButtonProps['htmlType'],
};

export default Button;
