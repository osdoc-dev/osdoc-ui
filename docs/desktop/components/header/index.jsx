import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import './index.less';
import logoIcon from '../../assets/png/logo.png';

class PageHeader extends React.PureComponent {
  getMenuList = () => [
    {
      url: '/doc',
      title: '文档',
    },
    {
      url: '/comp',
      title: '组件',
    },
    {
      url: 'https://www.ahwgs.cn/about',
      title: '关于我',
    },
    {
      url: 'https://github.com/osdoc-dev/osdoc-ui',
      title: 'Github',
    },
  ];

  render() {
    const menuList = this.getMenuList();
    return (
      <header id="page-header" className="page-header">
        <div className="page-header-nav">
          <div className="page-header-nav-left">
            <Link to="/">
              <img src={logoIcon} alt="osdoc-ui" />
            </Link>
          </div>
          <div className="page-header-nav-right">
            <ul className="nav-list">
              {menuList &&
                menuList.map((menu, ind) => (
                  <li className="nav-list-item" key={ind.toString()}>
                    {menu.url.indexOf('http') >= 0 ? (
                      <a href={menu.url} alt={menu.title} target="_blank" rel="noreferrer">
                        {menu.title}
                      </a>
                    ) : (
                      <NavLink activeClassName="router-link-active" to={menu.url || '/'}>
                        {menu.title}
                      </NavLink>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

PageHeader.defaultProps = {};

export default withRouter(PageHeader);
