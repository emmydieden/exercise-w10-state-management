

import { useTaskStore } from "../stores/useTaskStore";

export const CreateYourComponentsHere = () => {
    const {
        tasks, 
        addTask,
    } = useTaskStore()
  return (
    <div>
      <p>Tasks:</p>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        <input
          placeholder="Add a task"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask(e.target.value);
              e.target.value = "";
            }
          }}
          />
    </div>
  );
};