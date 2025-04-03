import { useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";
export default function TaskItem({ task }) {
  const { toggleComplete, deleteTask } = useContext(TaskContext);

  return (
    <div className="border p-2 rounded mb-2 flex justify-between items-center">
      <div>
        <h3 className={`${task.completed ? "line-through" : ""}`}>
          {task.title}
        </h3>
        <p>{task.description}</p>
        <div className="flex gap-4">
          <p>Due: {task.dueDate} </p>
          <p>|</p>
          <p>Priority: {task.priority}</p>
        </div>
      </div>
      <div>
        <button
          onClick={() => toggleComplete(task.id)}
          className="mr-2 bg-green-500 text-white p-2"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => confirm("Are you sure?") && deleteTask(task.id)}
          className="bg-red-500 text-white p-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
