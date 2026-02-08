import { useState } from "react";
import Task from "./components/task";
import AddTask from "./components/addTask";

function App() {
const [message, setMessage] = useState("Hello, Vite!");



  return (
    <div className="app">
      <h1 className="text-red-500"> gerenciador de tarefas </h1>
      <Task />
      <AddTask />
    </div>
  );
}

export default App;