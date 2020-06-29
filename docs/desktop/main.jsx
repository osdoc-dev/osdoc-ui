import React, { ReactDOM } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return <div>123123</div>;
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('container'),
);
