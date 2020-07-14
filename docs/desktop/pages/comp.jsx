import React from 'react';
import config from '../../common/constant/config';
import SiderMenu from '../components/sider-menu';
import RouteContent from '../components/route-content';
import Simulator from '../components/simulator';

class CompPage extends React.PureComponent {
  render() {
    const pathName = 'comp';
    const navConfig = config[pathName] || [];
    return (
      <section className="page comp-page">
        <SiderMenu pathName={pathName} config={navConfig} title="组件" />
        <div className="sider-right">
          <RouteContent data={navConfig} pathName={pathName} redirect="button" />
        </div>
        <Simulator />
      </section>
    );
  }
}

export default CompPage;
