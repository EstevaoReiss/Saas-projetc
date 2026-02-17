import { ChevronLeft, ChevronLeftIcon } from "lucide-react";
import {  useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() { 
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  
  console.log({ title, description });


  function BackPage() {
    navigate(-1);
  }

  return (

    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">

          <button onClick={BackPage}>
            <ChevronLeftIcon className="absolute left-0 " />
          </button>
       
                <h1 className="text-slate-100 text-3xl font-bold text-center  ">Detalhes da Tarefa</h1>
                 </div>
                 
        <div className="bg-slate-200 p-4 rounded-md">
      <h1 className="text-slate-600 font-bold text-xl">{title || "No title"}</h1>
      <p className="text-slate-600">{description || "No description"}</p>
      </div>
      </div>
    </div>
  );
}

export default TaskPage; 