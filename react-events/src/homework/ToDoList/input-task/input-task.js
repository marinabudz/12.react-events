import React, { Component } from "react";

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: ""
    };
  }

  handleInput = e => {
    this.setState({
      label: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({
      label: " "
    });
  };
  render() {
    return (
      <form className="d-flex mt-3" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Insert new task"
          onChange={this.handleInput}
          className="mr-4 form-control"
          value={this.state.label}
        />
        <button className="btn btn-outline-info ">Add</button>
      </form>
    );
  }
}
