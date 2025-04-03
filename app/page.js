import TaskContextProvider from "./context/TaskContext";
import TaskForm from "./tasks/TaskForm";
import TaskList from "./tasks/TaskList";

export default function Home() {
  return (
    <TaskContextProvider>
      <div className="max-w-lg mx-auto mt-10">
        <h1 className="text-2xl font-bold text-center mb-5">
          Task Manager -- 'Manage Your Tasks'
        </h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskContextProvider>
  );
}
