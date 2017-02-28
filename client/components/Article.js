import React from 'react';

// state
// lifecycle methods
// handlers that use props
class Article extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.onClick(this.props.id);
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <div>{this.props.title}</div>
      </div>
    );
  }
};

export default Article;
