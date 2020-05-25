import React, { Component } from "react";
import "./to-do-list-input.css";

export default class SimpleInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: " "
    };
  }
  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addSimpleItem(this.state.text);
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <form className="to-do-list-input" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Insert task"
          className="form-control"
        />
        <button className="btn btn-default to-do-list-input__button">
          Add
        </button>
      </form>
    );
  }
}
