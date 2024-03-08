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
      <input type="checkbox" checked={status} onChange={onToggle} />
      <span>{text}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;