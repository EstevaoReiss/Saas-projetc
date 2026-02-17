import { useState } from "react";

interface AddTaskProps {
  onAddTask: (title: string, description: string) => void;
}

function AddTask({ onAddTask }: AddTaskProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col gap-4">
      <input 
        type="text"          
        placeholder="Digite o título da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input 
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button 
        onClick={() => {
          if (title.trim() === '' || description.trim() === '') {
            alert('Por favor, preencha o título e a descrição da tarefa.');
            return;
          }
          onAddTask(title, description);
          setTitle('');
          setDescription('');
        }} 
        className="bg-slate-500 px-4 py-2 rounded-md text-white hover:bg-slate-600 transition-colors"
      >
        Adicionar tarefa
      </button>
    </div>
  );
}   

export default AddTask;