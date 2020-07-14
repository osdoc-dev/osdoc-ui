import React from 'react';
import SiderMenu from '../components/sider-menu';
import config from '../../common/constant/config';
import RouteContent from '../components/route-content';

class DocPage extends React.PureComponent {
  render() {
    const pathName = 'doc';
    const navConfig = config[pathName] || [];
    return (
      <section className="page doc-page">
        <SiderMenu pathName={pathName} config={navConfig} title="文档" />
        <div className="sider-right">
          <RouteContent data={navConfig} pathName={pathName} redirect="introduction" />
        </div>
      </section>
    );
  }
}

export default DocPage;
