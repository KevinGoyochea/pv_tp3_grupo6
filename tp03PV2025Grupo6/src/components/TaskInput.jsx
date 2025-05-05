import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Añadir nueva tarea..."
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TaskInput;
