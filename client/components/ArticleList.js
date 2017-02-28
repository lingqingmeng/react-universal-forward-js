import React from 'react';

import Article from './Article';

const ArticleList = (props) => {
  return (
    <div>
      {Object.entries(props.articles).map((entry) =>
        <Article key={entry[0]}
          onClick={props.onArticleClick}
          {...entry[1]} />
      )}
    </div>
  );
};

export default ArticleList;
