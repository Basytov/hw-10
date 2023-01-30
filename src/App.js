import React from 'react';
import styled from 'styled-components';
import './App.css';
import TodoProvider from './components/provider/TodoProvider';
import TodoForm from './components/todo-form/TodoForm';
import TodoList from './components/todo-list/TodoList';

function App() {
  return (
    <div>
      <StyledHeader>
        <h1>Todo list Context API</h1>
      </StyledHeader>

      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>


 
    </div>
  );
}

export default App;

const StyledHeader = styled.header`
text-align: center;
`