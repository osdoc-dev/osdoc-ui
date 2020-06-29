import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

class App extends React.Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return <div>2222</div>;
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('desktop-app'),
);
