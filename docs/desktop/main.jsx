import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import IndexPage from './pages/home';
import PageHeader from './components/header';
import '../common/style/base.less';
import './assets/style/main.less';

import DocPage from './pages/doc';
import CompPage from './pages/comp';
import PageFooter from './components/footer';

class App extends React.Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <main className="page-root">
        <PageHeader />
        <section className="page-content">
          <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route path="/doc" component={DocPage} />
            <Route path="/comp" component={CompPage} />
          </Switch>
        </section>
        <PageFooter />
      </main>
    );
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('desktop-app'),
);
