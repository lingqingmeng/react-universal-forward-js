import React, { Component, PropTypes } from 'react';

class Form extends Component {
  state = {
    titleValue: '',
    bodyValue: '',
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <form>
        <input type="text" placeholder="title"
          onChange={this.handleChange}
          name="titleValue"
          value={this.state.titleValue} />
        <br/>
        <textarea cols="30" rows="10"
          onChange={this.handleChange}
          name="bodyValue"
          value={this.state.bodyValue}
          placeholder="article body..."></textarea>
        <br/>
        <button>Save</button>
      </form>
    );
  }
}

export default Form;
