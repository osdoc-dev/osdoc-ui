import React, { PureComponent } from 'react';
import './index.less';

class Simulator extends PureComponent {
  render() {
    const { path } = this.props;
    return (
      <main className="simulator">
        <iframe
          className="iframe"
          src={`${window.location.protocol}//${window.location.host}/mobile.html#${path}`}
          title="simulator"
          frameBorder="0"
        ></iframe>
        <div className="iphone-bg"></div>
      </main>
    );
  }
}

export default Simulator;
