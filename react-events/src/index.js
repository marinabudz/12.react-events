import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppHeader from "./homework/ToDoList/header/header";
import SearchInput from "./homework/ToDoList/search/search";
import ToDoList from "./homework/ToDoList/to-do-list/to-do-list";
import AddTask from "./homework/ToDoList/input-task/input-task";
import SimpleList from "./homework/toDoSimple/to-do-list/to-do-list";
import SimpleInput from "./homework/toDoSimple/to-do-list-input/to-do-list-input";
import "./style/to-do.css";

class App extends Component {
  maxId = 100;
  itemId = 1000;
  constructor(props) {
    super(props);
    this.state = {
      toDoData: [
        {
          label: "Yoga morning class",
          completed: false,
          important: false,
          id: 3
        },
        {
          label: "Workout morning",
          completed: false,
          important: false,
          id: 4
        },
        {
          label: "Study class",
          completed: false,
          important: false,
          id: 5
        }
      ],
      term: "",
      simpleList: []
    };
  }
  onDelete = id => {
    this.setState(({ toDoData }) => {
      const idx = toDoData.findIndex(el => el.id === id);
      const before = toDoData.slice(0, idx);
      const after = toDoData.slice(idx + 1);
      const newArray = [...before, ...after];
      return {
        toDoData: newArray
      };
    });
  };
  onAdd = text => {
    const newItem = {
      label: text,
      important: false,
      completed: false,
      id: this.maxId++
    };
    this.setState(({ toDoData }) => {
      const newArray = [...toDoData, newItem];
      return { toDoData: newArray };
    });
  };
  toggleProperty = (arr, id, propertyName) => {
    const idx = arr.findIndex(elem => elem.id === id);
    //update obj
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propertyName]: !oldItem[propertyName] };
    //new array
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  onToggleCompleted = id => {
    this.setState(({ toDoData }) => {
      return {
        toDoData: this.toggleProperty(toDoData, id, "completed")
      };
    });
  };

  onToggleImportant = id => {
    this.setState(({ toDoData }) => {
      return {
        toDoData: this.toggleProperty(toDoData, id, "important")
      };
    });
  };

  addSimpleItem = text => {
    const newElem = {
      text,
      id: this.itemId++
    };
    this.setState(({ simpleList }) => {
      const newArray = [...simpleList, newElem];
      return {
        simpleList: newArray
      };
    });
  };
  findItem = (items, text) => {
    if (text.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.label.toLowerCase().indexOf(text.toLowerCase()) > -1;
    });
  };
  searchChange = term => {
    this.setState({ term });
  };
  render() {
    const { toDoData, term, simpleList } = this.state;
    const visibleItems = this.findItem(toDoData, term);
    const doneCount = toDoData.filter(elem => elem.completed).length;
    const toDoCount = toDoData.length - doneCount;
    return (
      <div>
        <div className="main">
          <AppHeader toDo={toDoCount} done={doneCount} />
          <SearchInput searchChange={this.searchChange} />
          <ToDoList
            toDoItems={visibleItems}
            deletedItem={this.onDelete}
            onToggleImportant={this.onToggleImportant}
            onToggleCompleted={this.onToggleCompleted}
          />
          <AddTask addItem={this.onAdd} />
        </div>

        <div className="main simple-list">
          <SimpleInput addSimpleItem={this.addSimpleItem} />
          <SimpleList simpleList={simpleList} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// USEFULL INFORMATION

//1
//unique key in li
// why ? -> кожного разу коли react render app він намагається визначити  які саме елементи змінились в dom tree і оновити тільки ті частини яеі змінились
//процес пошуку змін називається reconciliation algorirhm
//якщо в список добавити елемент в кінець то dom tree змінить по суті тільки його оскільки всі інші елементи будуть скажімо відповідати один олному
//але якщо його вставити спочатку або всередину все dom tree спаскудиться і оновиться повністю замість того щоб просто оновити один елемент
//якщо добавити унікальний key то react вже не буде порівнювати послідовно а радше за значеннями унікальних ключів
// НЕ ВИКОРИСТОВУВАТИ ІНДЕКС ЕЛЕМЕНТА В ЯКОСТІ КЛЮЧА!!!!! бо якщо не вкзаати ключ то react його сам вставить і саме базуючись на індексу елемента і тоді все просто знову спаскудиться бо вставишвши новий елементи індекси вже будуть відрізнятись і відповідно не будуть рівні попереднім значенням ключів і все дерево обновиться
//тому треба добавляти унікальний key
