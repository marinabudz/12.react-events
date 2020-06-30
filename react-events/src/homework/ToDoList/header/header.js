import React from "react";
import "./header.css";

const AppHeader = ({ toDo, done }) => {
  const currentTime = new Date().toDateString();
  return (
    <>
      <span> {currentTime}</span>
      <div className="header-filter">
        <h1> My to do list </h1>
        <h5 className="pt-3">
          {toDo} more to do, {done} done
        </h5>
      </div>
    </>
  );
};
//whatever
export default AppHeader;
