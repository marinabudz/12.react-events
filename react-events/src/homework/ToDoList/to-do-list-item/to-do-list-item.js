import React, { Component } from "react";

export default class ToDoListItem extends Component {
  render() {
    const {
      label,
      deletedItem,
      onToggleCompleted,
      onToggleImportant,
      important,
      completed
    } = this.props;

    const style = {
      textDecoration: completed ? " line-through" : "none",
      color: completed ? "grey" : "black",
      color: important ? "red" : "black"
    };

    return (
      <div className="d-flex justify-content-between">
        <span style={style}>{label}</span>
        <div>
          <button
            className="btn btn-ouline-sucess btn-sm"
            onClick={onToggleCompleted}
          >
            <i className="fa fa-check checkIcon iconSize"></i>
          </button>
          <button
            className="btn btn-ouline- btn-sm"
            onClick={onToggleImportant}
          >
            <i
              className="fa fa-exclamation exclamationIcon iconSize"
              aria-hidden="true"
            ></i>
          </button>
          <button
            className="btn btn-ouline-danger btn-sm"
            onClick={deletedItem}
          >
            <i className="fa fa-times timesIcon iconSize"></i>
          </button>
        </div>
      </div>
    );
  }
}
{
  /* <input
          value={label}
          style={style}
          onChange={this.onLabelChange(this.value)}
        /> */
}
// onLabelChange = item => {
//   return (this.props.value = item);
// };
