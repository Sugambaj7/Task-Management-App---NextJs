"use client";

import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export default function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTasks = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTasks, toggleComplete, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
