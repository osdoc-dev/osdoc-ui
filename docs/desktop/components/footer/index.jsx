import React from 'react';
import './index.less';

class PageFooter extends React.PureComponent {
  render() {
    const Copyright = (
      <section className="page-footer-copyright">
        <a href="https://ui.osdoc.cn">
          <span>Copyright © 2019. All Rights Reserved</span>OSDOC-UI
        </a>
      </section>
    );

    const list = [
      {
        title: 'w候人兮猗',
        url: 'https://www.ahwgs.cn',
      },
      {
        title: 'osdoc-lint',
        url: 'https://github.com/osdoc-dev/osdoc-lint',
      },
      {
        title: 'create-osdoc-app',
        url: 'https://github.com/osdoc-dev/create-osdoc-app',
      },
    ];

    const info = (
      <section className="info">
        <div className="info-widget info-5">
          <div className="info-widget-header">标签</div>
          <div className="info-widget-content">
            <ul className="tag-list">
              <li className="tag">React</li>
              <li className="tag">组件库</li>
              <li className="tag">H5移动端</li>
            </ul>
          </div>
        </div>
        <div className="info-widget info-5">
          <div className="info-widget-header">相关资源</div>
          <div className="info-widget-content">
            <ul className="text-list">
              {list.map(m => (
                <li key={m.url} className="text">
                  <a href={m.url} target="_blank" rel="noreferrer">
                    {m.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );

    return (
      <footer className="page-footer">
        {info}
        {Copyright}
      </footer>
    );
  }
}

export default PageFooter;
