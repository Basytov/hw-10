import styled from "styled-components";
import { useTodoContext } from "../provider/TodoProvider";
const TodoList = () => {
  const { todoList, removeTodo } = useTodoContext();

  return (
    <StyledUl>
      {todoList.map((todo, index) => (
        <StyledOl key={index}>
          <Title>{todo}</Title>

          <input type="checkbox" />
          <StyledButton onClick={() => removeTodo(index)}>Delete</StyledButton>
        </StyledOl>
      ))}
    </StyledUl>
  );
};

export default TodoList;

const StyledUl = styled.ul`
  width: fit-content;
  height: 100%;
  border: 3px solid #128212;
  margin-left: 560px;
  padding: 1rem;
`;

const StyledButton = styled.button`
  background-color: #4d0609;
  color: #f5f5f5a0;
  margin-left: 50px;
  text-align: center;
`;

const StyledOl = styled.ol`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 16px;
  width: 20vw;
  height: 8vh;
  background-color: red;
  border: 1px solid black;
  margin: 1rem;
`;
const Title = styled.p`
  display: flex;
  flex-wrap: wrap;
  width: 10vw;
  align-items: center;


`