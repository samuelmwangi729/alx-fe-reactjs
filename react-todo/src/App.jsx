import React from 'react'
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'

const App = () => {
  return (
    <div>
      <AddTodoForm/>
      <TodoList/>
    </div>
  )
}

export default App
