import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Markdown from '../markdown';

const LoadableComponent = component =>
  Loadable({
    loader: component.module,
    render: (loaded, props) => (
      <Markdown document={loaded.default} component={component} {...props} />
    ),
    loading: () => null,
  });

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
                  component={LoadableComponent(item)}
                />
              ));
            }

            return (
              <Route
                key={menu.value}
                path={`/${pathName}/${menu.value.toLowerCase()}`}
                component={LoadableComponent(menu)}
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
