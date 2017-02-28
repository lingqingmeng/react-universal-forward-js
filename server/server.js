const express = require('express');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

import ArticleList from '../client/components/ArticleList';
import Form from '../client/components/Form';

const app = express();
app.use(express.static('public'));

import markup from '../index.html';

import { getArticles, getArticleInfo } from '../api';

app.get('/', (req, res) => {
  getArticles().then(articles =>
    res.send(
      markup(
        ReactDOMServer.renderToString(
          <div>
            <ArticleList articles={articles} />
            <Form />
          </div>
        ),
        { articles }
      )
    )
  )
});

app.get('/api/articles/:articleId', (req, res) => {
  getArticleInfo(req.params.articleId).then(articleInfo =>
    res.send(articleInfo)
  );
});

app.listen(8080);
