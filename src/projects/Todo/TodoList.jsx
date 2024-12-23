import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({ data, checked, onDeleteTodo, onCheckedTodo }) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => onCheckedTodo(data)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
