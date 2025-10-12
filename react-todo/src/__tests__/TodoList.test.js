import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    const todoItems = screen.getAllByTestId('todo-item');
    expect(todoItems.length).toBe(2);
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');

    fireEvent.change(input, { target: { value: 'Write Tests' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('toggles a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);
    expect(todoItem).toHaveStyle('text-decoration: none');

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);
    const deleteButtons = screen.getAllByTestId('delete-button');

    fireEvent.click(deleteButtons[0]);
    expect(todoItem).not.toBeInTheDocument();
  });
});
