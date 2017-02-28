const express = require('express');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

import ArticleList from '../client/components/ArticleList';

const app = express();
app.use(express.static('public'));

import markup from '../index.html';

import data from '../api';

app.get('/', (req, res) => {
  res.send(
    markup(
      ReactDOMServer.renderToString(
        <ArticleList {...data} />
      ),
      data
    ),
  );
});

app.listen(8080);
