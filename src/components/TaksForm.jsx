import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    //esto hace que no refresque la pagina por default del submit
    e.preventDefault();
    createTask({
      title,
      image
    });

    setTitle("");
    setImage("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 mb-4 rounded-md"
      >
        <h1 className="text-2x1 font-bold text-white mb-3">Agregar</h1>
        <input
          placeholder="Escriba el titulo"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />


        <input
          placeholder="Agregue url del poster"
          onChange={(e) => setImage(e.target.value)}
          value={image}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        {image && <img src={image} alt="Imagen" />}

        <button className="bg-indigo-500 px-3 py-1 text-white rounded-lg mt-5 hover:bg-indigo-400">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
