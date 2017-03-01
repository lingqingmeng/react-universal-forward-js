import React from 'react';
import ReactDOM from 'react-dom';

import ArticleList from './ArticleList';
import FullArticle from './FullArticle';
import Form from './Form';

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
  displayCurrentArticle = () => {
    if (!this.state.currentArticleId) { return; }

    return <FullArticle {...this.state.articles[this.state.currentArticleId]} />;
  };
  saveArticle = (articleInput) => {
    // be optimistic
    apiAgent.saveArticle(articleInput)
      .then(newArticle => {
        // confirm the save
        this.setState(prevState => ({
          articles: {
            ...prevState.articles,
            [newArticle.id]: newArticle,
          }
        }))
      });
  };
  render() {
    return (
      <div>
        <ArticleList
          onArticleClick={this.fetchArticleInfo}
          articles={this.state.articles} />
        <Form onSubmit={this.saveArticle} />
        {this.displayCurrentArticle()}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
