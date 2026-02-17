import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Define the Task type
export interface TaskType {
  id: string | number;
  title: string;
  description: string;
  isCompleted: boolean;
}

// Define the props type
interface TaskProps {
  tasks: TaskType[];
  onTaskCheck: (id: string | number) => void;
  onDelete: (id: string | number) => void;
}

function Task({ tasks, onTaskCheck, onDelete }: TaskProps) {
  const navigate = useNavigate();

  function onSeeDetails(task: TaskType) {
    const query = new URLSearchParams();
    query.set('title', task.title);
    query.set('description', task.description);
    navigate(`/detalhes?${query.toString()}`);
  }
  
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button 
            onClick={() => onTaskCheck(task.id)} 
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md hover:bg-slate-500 transition-colors ${task.isCompleted ? 'line-through opacity-75' : ''}`}
          > 
            {task.title}
          </button>
          <button 
            onClick={() => onSeeDetails(task)} 
            className="bg-slate-400 p-2 rounded-md text-white hover:bg-slate-500 transition-colors"
            title="Ver detalhes"
          >
            <ChevronRightIcon size={20} />
          </button>
          <button 
            onClick={() => onDelete(task.id)} 
            className="bg-slate-400 p-2 rounded-md text-white hover:bg-slate-500 transition-colors"
            title="Excluir tarefa"
          >
            <TrashIcon size={20} />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Task;