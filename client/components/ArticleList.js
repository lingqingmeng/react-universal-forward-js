import React from 'react';

import Article from './Article';

const ArticleList = ({ articles, authors }) => {
  return (
    <div>
      {Object.entries(articles).map((entry) =>
        <Article key={entry[0]} {...entry[1]} />
      )}
    </div>
  );
};

export default ArticleList;
