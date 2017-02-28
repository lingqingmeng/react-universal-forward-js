import ArticleList from './ArticleList';

import React from 'react';

import ReactDOM from 'react-dom';

ReactDOM.render(
  <ArticleList {...window.__INITIAL_DATA__} />,
  document.getElementById("root")
);
