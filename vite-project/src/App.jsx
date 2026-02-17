import { useState, useEffect } from "react";
import Task from "./components/task";
import AddTask from "./components/addTask";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  function onTaskCheck(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDelete(taskId) {
    const deleteTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(deleteTasks);
  }

  function onAddTask(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
        const data = await response.json();
        
        const convertedTasks = data.map((apiTask) => ({
          id: apiTask.id,
          title: apiTask.title,
          description: "", 
          isCompleted: apiTask.completed
        }));
        
        setTasks(convertedTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }
    
    if (tasks.length === 0) {
      fetchTasks();
    }
  }, []);

  return (
    <div className="w-screen h-screen flex bg-slate-600 justify-center p-6">
      <div className="w-[500px] h-full flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-slate-100 text-center flex-shrink-0">
          Gerenciador de Tarefas
        </h1>
        
        {/* Fixed height section for AddTask */}
        <div className="flex-shrink-0">
          <AddTask onAddTask={onAddTask} />
        </div>
        
        <div className="flex-1 min-h-0 overflow-y-auto">
          <Task tasks={tasks} onTaskCheck={onTaskCheck} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}

export default App;