import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { AiOutlineStar } from "react-icons/ai";

function TaskCard({ task }) {

  const { deleteTask } = useContext(TaskContext) 

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize mb-4">{task.title}</h1>
      <img className="rounded-md w-80 h-80 mb-3" src={task.image}/>
      <button className="bg-red-600 px-2 py-1 rounded-md mt-5 hover:bg-red-400"
       onClick={() => deleteTask(task.id)}>
        Eliminar
      </button>
    </div>
  );
  
  
}

export default TaskCard;
