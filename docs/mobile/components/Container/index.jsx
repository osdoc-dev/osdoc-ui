import React, { useState } from 'react';
import classnames from 'classnames';
import Context from '../../utils/context';
import './style.less';

const Container = props => {
  const [lang, setLang] = useState(window.sessionStorage.language || 'zhCN');
  const { className, children } = props;
  const cls = classnames('app-container', className);

  // 先预留Context
  return (
    <div className={cls}>
      <Context.Provider value={{ lang }}>{children}</Context.Provider>
    </div>
  );
};

export default Container;
