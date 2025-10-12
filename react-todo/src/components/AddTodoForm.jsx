import React, { useState } from 'react';

const AddTodoForm = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="New todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        data-testid="todo-input"
      />
      <button type="submit" data-testid="add-button">Add</button>
    </form>
  );
};

export default AddTodoForm;
