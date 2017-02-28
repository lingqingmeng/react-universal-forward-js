const express = require('express');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

import Hello from '../client/components/Hello';

const app = express();
app.use(express.static('public'));

import markup from '../index.html';

app.get('/:name', (req, res) => {
  res.send(
    markup(
      ReactDOMServer.renderToString(
        <Hello name={req.params.name} />
      ),
      { name: req.params.name }
    ),
  );
});

app.listen(8080);
