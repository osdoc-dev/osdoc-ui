import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

class RouteContent extends React.PureComponent {
  render() {
    const { data, pathName, redirect = '' } = this.props;

    return (
      <section className="md-content">
        <Switch>
          {data.map(menu => {
            if (menu.children) {
              return menu.children.map(item => (
                <Route
                  key={item.value}
                  path={`/${pathName}/${item.value.toLowerCase()}`}
                  component={require(`../../views/${item.value}`).default}
                />
              ));
            }

            return (
              <Route
                key={menu.value}
                path={`/${pathName}/${menu.value.toLowerCase()}`}
                component={require(`../../views/${menu.value}`).default}
              />
            );
          })}
          {redirect && (
            <Redirect path={`/${pathName}/`} to={{ pathname: `/${pathName}/${redirect}` }} />
          )}
        </Switch>
      </section>
    );
  }
}

export default RouteContent;
