import React from 'react';
import './index.less';
import classNames from 'classnames';

class WavesArea extends React.PureComponent {
  render() {
    const { className } = this.props;
    return (
      <div className={classNames('waves-area', className)}>
        <svg
          className="waves-svg"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M -160 44 c 30 0 58 -18 88 -18 s 58 18 88 18 s 58 -18 88 -18 s 58 18 88 18 v 44 h -352 Z"
            />
          </defs>
          <g className="parallax">
            <use href="#gentle-wave" x="48" y="0" />
            <use href="#gentle-wave" x="48" y="3" />
            <use href="#gentle-wave" x="48" y="5" />
            <use href="#gentle-wave" x="48" y="7" />
          </g>
        </svg>
      </div>
    );
  }
}

export default WavesArea;
