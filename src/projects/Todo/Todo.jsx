import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";
import "./Todo.css";

export const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    // to check if the input filed is empty or not
    if (!content) return;

    // to check if the data is alredy existing or not
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };
  
  // todo add data to local storage.
  setLocalStorageTodoData(task);

  // todo handleDeleteClick function
  const handleDeleteClick = (value) => {
    const updatedTask = task.filter((curElem) => curElem.content !== value);
    setTask(updatedTask);
  };

  // todo handleClearAllClick function
  const handleClearAllClick = () => {
    setTask([]);
  };

  // todo handleCheckeClick function
  const handleCheckeClick = (value) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === value) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
          <TodoDate />
        </header>
        <TodoForm onAddTodo={handleFormSubmit} />

        <section className="myUnOrdList">
          <ul>
            {task.map((curTask) => {
              return (
                <TodoList
                  key={curTask.id}
                  data={curTask.content}
                  checked={curTask.checked}
                  onDeleteTodo={handleDeleteClick}
                  onCheckedTodo={handleCheckeClick}
                />
              );
            })}
          </ul>
        </section>
        <section>
          <button className="clear-btn" onClick={handleClearAllClick}>
            Clear all
          </button>
        </section>
      </section>
    </>
  );
};
