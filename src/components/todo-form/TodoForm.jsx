import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useTodoContext } from '../provider/TodoProvider';



const TodoForm = () => {
    const { getNumberOfTodoItems, addTodo} = useTodoContext();
    const [todoItem, setTodoItem] = useState(" ");
    
    const handleOnSubmit = (e) => {
        e.preventDefault();

if (!todoItem) {
    return;
}

        addTodo(todoItem);
        setTodoItem('');
    }
    return (
      <StyledForm onSubmit={handleOnSubmit}>
        <h3>Number of todo items : {getNumberOfTodoItems()} </h3>
            <StyledInput type="text" value={todoItem} onChange={(e) => setTodoItem(e.target.value)} />
        <StyledButton type="submit">+</StyledButton>

      </StyledForm> 
      
    );
};

export default TodoForm;

const StyledForm = styled.form`
  text-align: center;

`
const StyledInput = styled.input`
width: 350px;
  height: 20px;
  border: 3px solid;
`
const StyledButton = styled.button`
  width: 50px;
  height: 25px;
  border: 3px solid #3f6149f8;
  margin-left: 10px;
  background-color: #3f6149f8;
`;