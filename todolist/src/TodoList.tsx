// src/TodoList.tsx
import React, { useState } from 'react';
import TodoItem from './ToDoItem';

interface TodoListProps {
  items: { id: number; text: string; status: boolean }[];
  onAdd: (text: string) => void;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onAdd, onToggle, onDelete }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim().length > 0) {
      onAdd(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {items.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            status={item.status}
            onToggle={() => onToggle(item.id)}
            onDelete={() => onDelete(item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;