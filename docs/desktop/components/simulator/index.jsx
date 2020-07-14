import React, { PureComponent } from 'react';
import './index.less';

class Simulator extends PureComponent {
  render() {
    return (
      <main className="simulator">
        <iframe className="iframe" src="/mobile.html" frameBorder="0" title="title"></iframe>
        <div className="iphone-bg"></div>
      </main>
    );
  }
}

export default Simulator;
