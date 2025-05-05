import React from "react";

const TaskItem = ({ task, toggleComplete, removeTask }) => {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.text}
      </span>
      <button onClick={() => removeTask(task.id)}>Eliminar</button>
    </div>
  );
};

export default TaskItem;
