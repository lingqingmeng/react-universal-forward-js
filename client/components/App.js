import Hello from './Hello';

import React from 'react';

import ReactDOM from 'react-dom';

ReactDOM.render(
  <Hello name={window.__INITIAL_DATA__.name} />,
  document.getElementById("root")
);
