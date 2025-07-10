import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import "./styles.css";

type Props = {
  todo: Todo;
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoCard: React.FC<Props> = ({ todo, todoList, setTodoList }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo } : todo
      )
    );
    setEdit(false)
  };

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() =>{
    inputRef.current?.focus();
  },[edit])

  return (
    <form className="todoCards" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todoEditBox"
        />
      ) : todo.isDone ? (
        <s className="todo__single--card">{todo.todo}</s>
      ) : (
        <span className="todo__single--card">{todo.todo}</span>
      )}
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <EditIcon />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <DoneIcon />
        </span>
      </div>
    </form>
  );
};

export default TodoCard;
