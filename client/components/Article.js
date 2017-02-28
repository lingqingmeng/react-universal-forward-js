import React from 'react';

import * as apiAgent from '../apiAgent';

const Article = (props) => {
  const handleClick = (event) => {
    event.preventDefault();

    apiAgent.getArticleInfo(props.id)
      .then(console.log);
  };
  return (
    <div onClick={handleClick}>
      <div>{props.title}</div>
    </div>
  );
};

export default Article;
