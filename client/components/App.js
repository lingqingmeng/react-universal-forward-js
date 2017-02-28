import React from 'react';
import ReactDOM from 'react-dom';

import ArticleList from './ArticleList';
import FullArticle from './FullArticle';

import * as apiAgent from '../apiAgent';

class App extends React.Component {
  constructor(props) {
    super(props);
    const { articles } = window.__INITIAL_DATA__;
    this.state = { articles, currentArticleId: null };
  }
  fetchArticleInfo = (articleId) => {
    apiAgent.getArticleInfo(articleId)
      .then(article => {
        this.setState((prevState) => {
          return {
            currentArticleId: article.id,
            articles: {
              ...prevState.articles,
              [article.id]: article,
            }
          };
        })
      });
  }
  render() {
    return (
      <div>
        <ArticleList
          onArticleClick={this.fetchArticleInfo}
          {...this.state} />
        <FullArticle {...this.state.articles[0]} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
