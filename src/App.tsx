import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodoList([...todoList,{id: Date.now(), todo: todo, isDone: false}])
      setTodo('');
    }
  };

  console.log(todoList)

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      {todoList.map((t) => (
          <li>{t.todo}</li>
      ))}
    </div>
  );
};

export default App;
