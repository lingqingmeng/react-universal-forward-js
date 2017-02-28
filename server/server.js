const express = require('express');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Hello = (props) => {
  return (
    <div>
      Hi {props.name}
    </div>
  );
};

const app = express();

app.get('/:name', (req, res) => {
  res.send(
    ReactDOMServer.renderToString(
      <Hello name={req.params.name} />
    )
  );
});

app.listen(8080);
