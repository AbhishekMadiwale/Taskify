import React from "react";
import "./styles.css";
import { Todo } from "../model";
import TodoCard from "./TodoCard";

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todoList, setTodoList }) => {
  return (
      <div className="container">
        <div className="todoList">
          <span className="todos__heading">Active Tasks</span>
          {todoList.map((todo) => (
            <TodoCard
              todo={todo}
              todoList={todoList}
              key={todo.id}
              setTodoList={setTodoList}
            />
          ))}
        </div>
        <div className="todoList">
          <span className="todos__heading"> Completed Tasks</span>
          {todoList.map((todo) => (
            <TodoCard
              todo={todo}
              todoList={todoList}
              key={todo.id}
              setTodoList={setTodoList}
            />
          ))}
        </div>
      </div>
  );
};

export default TodoList;
