import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import config from '../common/constant/config';

const LoadableComponent = (component) =>
  Loadable({
    loader: component.module,
    loading: () => null,
  });

class App extends React.Component {
  render() {
    const { comp } = config;

    const [basic] = comp;
    console.log('basic', basic);

    return (
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/" component={lazy(() => import('./pages/Index'))} />
          {[...basic.children].map((component, i) => (
            <Route
              key={+i}
              path={`/${component.value.toLowerCase()}`}
              component={LoadableComponent(component)}
            />
          ))}
          <Route component={lazy(() => import('./pages/NotFound'))} />
          <div></div>
        </Switch>
      </Suspense>
    );
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('mobile-app'),
);
