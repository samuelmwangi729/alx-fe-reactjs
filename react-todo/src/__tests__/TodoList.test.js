import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom';

// Test to check if the TodoList component renders with initial todos
test('renders TodoList with initial items', () => {
  render(<TodoList />);
  // Verify initial todos are present
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
});

// Test to check if a new todo can be added
test('adds a new todo item', () => {
  render(<TodoList />);
  const input = screen.getByTestId('todo-input');
  const addButton = screen.getByTestId('add-button');

  // Simulate user typing and submitting the form
  fireEvent.change(input, { target: { value: 'Write Tests' } });
  fireEvent.click(addButton);

  // Verify new todo is added to the list
  expect(screen.getByText(/Write Tests/i)).toBeInTheDocument();
});

// Test to check if a todo item can be toggled as completed
test('toggles a todo item', () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/Learn React/i);

  // Initial state should not be completed
  expect(todoItem).toHaveStyle('text-decoration: none');

  // Simulate clicking the todo item
  fireEvent.click(todoItem);

  // Now it should be completed
  expect(todoItem).toHaveStyle('text-decoration: line-through');
});

// Test to check if a todo item can be deleted
test('deletes a todo item', () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/Learn React/i);
  const deleteButtons = screen.getAllByTestId('delete-button');

  // Click the first delete button
  fireEvent.click(deleteButtons[0]);

  // Verify the item is no longer in the document
  expect(todoItem).not.toBeInTheDocument();
});
