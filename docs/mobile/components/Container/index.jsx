import React from 'react';
import classnames from 'classnames';
import Context from '../../utils/context';
import './style.less';

const Container = props => {
  const { className, children } = props;
  const cls = classnames('app-container', className);

  // 先预留Context
  return (
    <div className={cls}>
      <Context.Provider>{children}</Context.Provider>
    </div>
  );
};

export default Container;
