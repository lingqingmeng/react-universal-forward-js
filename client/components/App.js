import ArticleList from './ArticleList';

import React from 'react';

import ReactDOM from 'react-dom';

import * as apiAgent from '../apiAgent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = window.__INITIAL_DATA__;
  }
  fetchArticleInfo = (articleId) => {
    apiAgent.getArticleInfo(articleId)
      .then(article => {
        this.setState({
          currentArticleId: article.id,
          articles: {
            ...this.state.articles,
            [article.id]: article,
          }
        })
      });
  }
  render() {
    return (
      <ArticleList
        onArticleClick={this.fetchArticleInfo}
        {...this.state} />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
