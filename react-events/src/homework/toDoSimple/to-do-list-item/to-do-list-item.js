import React from "react";
import "./to-do-list-item.css";

const SimpleListItem = ({ text }) => {
  return (
    <>
      <span className="to-do-simple-list-item"> {text} </span>
    </>
  );
};
export default SimpleListItem;
