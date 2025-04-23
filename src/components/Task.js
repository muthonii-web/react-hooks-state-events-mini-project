import React from "react";

const Task = ({ task, onTaskDelete }) => {
  const handleDelete = () => {
    onTaskDelete(task.id);
  };

  return (
    <li>
      <span>
        {task.text} - {task.category}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Task;
