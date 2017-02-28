import ArticleList from './ArticleList';

import React from 'react';

import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = window.__INITIAL_DATA__;
  }
  render() {
    return (
      <ArticleList {...this.state} />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
