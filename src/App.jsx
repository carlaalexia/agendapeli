import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaksForm";
import "./App.css";
import { FaLinkedin, FaGithub, FaPlay } from "react-icons/fa";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="bg-zinc-900 container mx-auto p-10">
        <h1 className="text-center font-bold mb-4 text-3xl">
          <span className="text-white">Agenda de </span>
          <span className="text-red-600 font-bold neon-effect">peliculas</span>
        </h1>
        <TaskForm />
        <br />
        <TaskList />

        <div> 
        <div className="container">
          <ul>
            <li >
              <a href="https://www.linkedin.com/in/carla-alexia-marquez/">
              <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/carlaalexia">
              <FaGithub/>
              </a>
            </li>
            <li>
              <a href="https://ac-pagina.vercel.app/">
              <FaPlay />
              </a>
            </li>
          
          </ul>
        </div>
      </div>
      </div>

     
    </main>
  );
}

export default App;
