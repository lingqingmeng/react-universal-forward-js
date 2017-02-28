import React, { PropTypes } from 'react';

class FullArticle extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    authorId: PropTypes.number.isRequired,
  };
  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <div>{this.props.authorId}</div>
        <div>{this.props.date}</div>
        <div>{this.props.body}</div>
      </div>
    );
  }
};

export default FullArticle;
