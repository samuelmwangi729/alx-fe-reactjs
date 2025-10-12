import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddTodoForm from '../components/AddTodoForm';

describe('AddTodoForm Component', () => {
  test('renders input and button', () => {
    render(<AddTodoForm onAddTodo={jest.fn()} />);

    const input = screen.getByTestId('todo-input');
    const button = screen.getByTestId('add-button');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('allows typing into the input', () => {
    render(<AddTodoForm onAddTodo={jest.fn()} />);

    const input = screen.getByTestId('todo-input');
    fireEvent.change(input, { target: { value: 'New Todo' } });

    expect(input.value).toBe('New Todo');
  });

  test('calls onAddTodo when submitted with valid input', () => {
    const mockAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockAddTodo} />);

    const input = screen.getByTestId('todo-input');
    const button = screen.getByTestId('add-button');

    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(button);

    expect(mockAddTodo).toHaveBeenCalledWith('Test Todo');
    expect(input.value).toBe('');
  });

  test('does not call onAddTodo when input is empty', () => {
    const mockAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockAddTodo} />);

    const button = screen.getByTestId('add-button');
    fireEvent.click(button);

    expect(mockAddTodo).not.toHaveBeenCalled();
  });
});
