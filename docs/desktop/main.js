import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import IndexPage from './pages/home';
import PageHeader from './components/header';

import '../common/style/base.less';
import DocPage from './pages/doc';
import CompPage from './pages/comp';

class App extends React.Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <main>
        <PageHeader></PageHeader>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/doc" exact component={DocPage} />
          <Route path="/comp" exact component={CompPage} />
        </Switch>
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
