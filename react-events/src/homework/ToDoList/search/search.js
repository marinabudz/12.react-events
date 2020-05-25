import React, { Component } from "react";
import "./search.css";
import ItemStatusFilter from "../item-status-filter/item-status-filter";

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }
  handleChange = e => {
    const text = e.target.value;
    this.setState({
      term: text
    });
    this.props.searchChange(text);
  };
  render() {
    return (
      <div className="search">
        <input
          className="search__input"
          placeholder="Search"
          value={this.state.term}
          onChange={this.handleChange}
        />
        <ItemStatusFilter />
      </div>
    );
  }
}
