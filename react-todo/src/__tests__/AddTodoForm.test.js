import { render, screen, fireEvent } from '@testing-library/react';
import AddTodoForm from '../components/AddTodoForm';
import '@testing-library/jest-dom';

// Test to check if AddTodoForm renders input and button
test('renders AddTodoForm input and button', () => {
  render(<AddTodoForm onAddTodo={() => {}} />);
  // Verify input and button are rendered
  expect(screen.getByTestId('todo-input')).toBeInTheDocument();
  expect(screen.getByTestId('add-button')).toBeInTheDocument();
});

// Test to check if input value changes as user types
test('updates input value on change', () => {
  render(<AddTodoForm onAddTodo={() => {}} />);
  const input = screen.getByTestId('todo-input');

  // Simulate typing in the input field
  fireEvent.change(input, { target: { value: 'New Task' } });

  // Verify input has new value
  expect(input.value).toBe('New Task');
});

// Test to check if onAddTodo is called on valid form submit
test('calls onAddTodo on submit with valid input', () => {
  const mockAddTodo = jest.fn();
  render(<AddTodoForm onAddTodo={mockAddTodo} />);
  const input = screen.getByTestId('todo-input');
  const addButton = screen.getByTestId('add-button');

  // Enter a valid todo and submit
  fireEvent.change(input, { target: { value: 'Write Unit Tests' } });
  fireEvent.click(addButton);

  // Verify callback is called with correct input
  expect(mockAddTodo).toHaveBeenCalledWith('Write Unit Tests');

  // Input should be cleared
  expect(input.value).toBe('');
});

// Test to ensure no callback when submitting empty input
test('does not call onAddTodo on empty submit', () => {
  const mockAddTodo = jest.fn();
  render(<AddTodoForm onAddTodo={mockAddTodo} />);
  const addButton = screen.getByTestId('add-button');

  // Click submit with empty input
  fireEvent.click(addButton);

  // Verify callback was not called
  expect(mockAddTodo).not.toHaveBeenCalled();
});
