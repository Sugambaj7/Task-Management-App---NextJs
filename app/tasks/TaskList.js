"use client";
import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const [filter, setFilter] = useState("All");
  const { tasks } = useContext(TaskContext);

  // useEffect(() => {
  //   console.log(filter, "k xa filter ma");
  // }, [filter]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });
  return (
    <div className="bg-white p-4 rounded shadow mt-4 mb-5">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">Tasks</h2>
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2"
        >
          <option>All</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>
      </div>

      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <p>No tasks found</p>
      )}
    </div>
  );
}
