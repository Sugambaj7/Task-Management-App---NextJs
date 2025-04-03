"use client";

import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
export default function TaskForm() {
  const { addTasks } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required.";
    } else if (title.length > 50) {
      newErrors.title = "Title must be under 50 characters.";
    }

    if (!dueDate) {
      newErrors.dueDate = "Due date is required.";
    } else {
      const today = new Date().setHours(0, 0, 0, 0);
      const selectedDate = new Date(dueDate).setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.dueDate = "Due date cannot be in the past.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      dueDate,
      completed: false,
    };

    if (!title || !dueDate) return alert("Title and Due Date are required!");
    addTasks(newTask);
    setTitle("");
    setDescription("");
    setPriority("Medium");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <div className="mb-2">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      <div className="mb-2">
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border p-2 w-full"
        />
        {errors.dueDate && (
          <p className="text-red-500 text-sm">{errors.dueDate}</p>
        )}
      </div>

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border p-2 w-full mb-2"
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button className="bg-blue-500 text-white p-2 w-full">Add Task</button>
    </form>
  );
}
