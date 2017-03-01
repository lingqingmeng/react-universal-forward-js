import React, { Component, PropTypes } from 'react';

class Form extends Component {
  state = {
    input: {
      title: '',
      body: '',
    }
  };
  handleChange = (event) => {
    const target = event.target;
    this.setState(prevState => ({
      input: {
        ...prevState.input,
        [target.name]: target.value
      }
    }));
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.input);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="title"
          onChange={this.handleChange}
          name="title"
          required
          value={this.state.input.title} />
        <br/>
        <textarea cols="30" rows="10"
          onChange={this.handleChange}
          name="body"
          required
          value={this.state.input.body}
          placeholder="article body..."></textarea>
        <br/>
        <button>Save</button>
      </form>
    );
  }
}

export default Form;
