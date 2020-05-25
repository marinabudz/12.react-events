import React from "react";
import ToDoListItem from "../to-do-list-item/to-do-list-item";

// має відповідати тиільки за відобрадення даних
//toDoItems is array from which we are taking each element and show up how it should be displayed

const ToDoList = ({
  toDoItems,
  deletedItem,
  onToggleCompleted,
  onToggleImportant
}) => {
  const eachElement = toDoItems.map(item => {
    //використання rest operator
    const { id, ...itemProps } = item;
    return (
      //використання spread operator
      <li key={id} className="list-group-item">
        <ToDoListItem
          {...itemProps}
          deletedItem={() => deletedItem(id)}
          onToggleCompleted={() => onToggleCompleted(id)} // чому саме так її слід викликати
          onToggleImportant={() => onToggleImportant(id)}
        />
      </li>
    );
  });
  return <ul className="list-group mt-3">{eachElement}</ul>;
};

export default ToDoList;

//USEFULL INFORMATION

//1
//просто мануально все потрібно вводити і не відомо скільки елементів буде в списку
// const ToDoList = () => {
//   return (
//     <ul>
//       <li>
//         <ToDoListItem label="Drink coffee" />
//       </li>
//       <li>
//         <ToDoListItem label="Learn React" important />
//       </li>
//       <li>
//         <ToDoListItem label="Learn spanish" completed />
//       </li>
//     </ul>
//   );
// };

//<li key={item.id}>
//<ToDoListItem {...item} />
//</li>

//2
//довший код але робочий
//   <li>
//     <ToDoListItem
//       label={item.label}
//       important={item.important}
//       completed={item.completed}
//     />
//   </li>
//3
//spread operator
//який витягує кожну властивість з обєкту item і передати їх як атрибути разом з їх значенням (передає всі властивості)
//тільки якщо атрибути які потрібні мають такі ж самі назви , як і властивості
