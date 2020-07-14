import React from 'react';
import config from '../../common/constant/config';
import SiderMenu from '../components/sider-menu';
import RouteContent from '../components/route-content';
import Simulator from '../components/simulator';
import { getPageName } from '../../common/utils';

class CompPage extends React.PureComponent {
  render() {
    const pathName = 'comp';
    const mobilePath = getPageName(this.props).replace(pathName, '') || '';
    const navConfig = config[pathName] || [];
    return (
      <section className="page comp-page">
        <SiderMenu pathName={pathName} config={navConfig} title="组件" />
        <div className="sider-right">
          <RouteContent data={navConfig} pathName={pathName} redirect="button" />
        </div>
        <Simulator path={mobilePath} />
      </section>
    );
  }
}

export default CompPage;
