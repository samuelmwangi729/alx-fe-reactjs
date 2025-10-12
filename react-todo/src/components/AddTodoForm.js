import React, { useState } from 'react';

export default function AddTodoForm({ onAddTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTodo(text.trim());
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testid="todo-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New todo"
      />
      <button data-testid="add-button" type="submit">
        Add
      </button>
    </form>
  );
}
