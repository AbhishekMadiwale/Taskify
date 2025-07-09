import React from "react";
import "./styles.css";
import { Todo } from "../model";
import TodoCard from "./TodoCard";

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todoList, setTodoList }) => {
  return <div className="todoList">
    {todoList.map((todo) => (
       <TodoCard todo={todo} key={todo.id} todoList={todoList} setTodoList={setTodoList}/>        
    ))}
    
  </div>;
};

export default TodoList;
