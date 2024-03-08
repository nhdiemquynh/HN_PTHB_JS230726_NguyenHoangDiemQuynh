// src/TodoItem.tsx
import React, { useState } from 'react';

interface TodoItemProps {
  text: string;
  status: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, status, onToggle, onDelete }) => {
  return (
    <div style={{ textDecoration: status ? 'line-through' : 'none' }}>
      <span>{text}</span>
      <input type="checkbox" checked={status} onChange={onToggle} />
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;