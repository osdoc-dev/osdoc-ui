import React, { Component } from 'react';
import './index.less';
import { NavLink } from 'react-router-dom';

import upArrow from '../../../common/assets/png/up_arrow.png';
import downArrow from '../../../common/assets/png/down_arrow.png';

export default class SiderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [0],
    };
  }

  toggleMenu = ind => {
    const { menuList } = this.state;
    const index = menuList.indexOf(ind);
    if (index >= 0) {
      menuList.splice(index, 1);
    } else {
      menuList.push(ind);
    }
    this.setState({
      menuList,
    });
  };

  render() {
    const { config, pathName = '/', title = '侧边栏标题' } = this.props;
    const { menuList } = this.state;
    return (
      <nav className="sider-menu">
        <h3 className="sider-menu-title">{title}</h3>
        <ul className="sider-nav">
          {config &&
            config.map((menu, ind) => {
              if (menu.children && menu.children.length) {
                return (
                  <li key={ind.toString()} className="sider-sub-menu-item">
                    <a className="sider-sub-menu-item-title" onClick={() => this.toggleMenu(ind)}>
                      {menu.label}
                      <img
                        className="icon"
                        src={menuList.includes(ind) ? upArrow : downArrow}
                        alt=""
                      />
                    </a>
                    <ul className={`child-list ${!menuList.includes(ind) ? 'hidden' : ''}`}>
                      {menu.children.map((navItem, inde) => (
                        <li className="sider-nav-item child" key={inde.toString()}>
                          <NavLink
                            activeClassName="sider-nav-item-active"
                            to={{
                              pathname: navItem.value
                                ? `/${pathName}/${navItem.value.toLowerCase()}`
                                : '/',
                            }}
                          >
                            <h2>
                              {`${navItem.value} `}
                              {navItem.label || ''}
                            </h2>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              return (
                <li className="sider-nav-item" key={ind.toString()}>
                  <NavLink
                    exact
                    activeClassName="sider-nav-item-active"
                    to={{
                      pathname: menu.value ? `/${pathName}/${menu.value.toLowerCase()}` : '/',
                    }}
                  >
                    <h2>{menu.label || ''}</h2>
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </nav>
    );
  }
}
