import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import config from '../common/constant/config';
import Container from './components/Container';
import Markdown from './components/Markdown';
import Footer from './components/Footer';
import './assets/style/index.less';

const LoadableComponent = component => {
  const loader = { page: component.module };
  return Loadable.Map({
    loader,
    render: (loaded, props) => (
      <Container className={`${component.value.toLowerCase()}-page`}>
        <Markdown content={loaded.page.default} component={component} {...props} />
        <Footer />
      </Container>
    ),
    loading: () => null,
  });
};

class App extends React.PureComponent {
  render() {
    const { comp } = config;

    const [basic, form, feedback] = comp;

    return (
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/" component={lazy(() => import('./pages/Index'))} />
          {[...basic.children, ...form.children, ...feedback.children].map((component, i) => (
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
