import React from 'react';

const Article = (props) => {
  // const handleClick = (event) => {
  //   event.preventDefault();
  //
  // };
  return (
    <div onClick={() => props.onClick(props.id)}>
      <div>{props.title}</div>
    </div>
  );
};

export default Article;
