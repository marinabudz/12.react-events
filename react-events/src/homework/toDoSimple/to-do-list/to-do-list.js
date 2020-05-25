import React from "react";
import SimpleListItem from "../to-do-list-item/to-do-list-item";

const SimpleList = ({ simpleList }) => {
  const eachElement = simpleList.map(elem => {
    const { id, text } = elem;
    return (
      <li key={id}>
        <SimpleListItem text={text} />
      </li>
    );
  });
  return <ul className="list-unstyled"> {eachElement}</ul>;
};

export default SimpleList;
