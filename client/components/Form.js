import React, { Component, PropTypes } from 'react';

class Form extends Component {
  // { body: ..., title: ... }
  state = {
    input: {
      title: '',
      body: '',
    }
  }
  handleChange = (event) => {
    event.persist();
    this.setState(prevState => ({
      input: {
        ...prevState.input,
        [event.target.name]: event.target.value
      }
    }));
  };
  render() {
    return (
      <form>
        <input type="text" placeholder="title"
          onChange={this.handleChange}
          name="title"
          value={this.state.input.title} />
        <br/>
        <textarea cols="30" rows="10"
          onChange={this.handleChange}
          name="body"
          value={this.state.input.body}
          placeholder="article body..."></textarea>
        <br/>
        <button>Save</button>
      </form>
    );
  }
}

export default Form;
