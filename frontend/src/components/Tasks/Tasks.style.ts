import styled from 'styled-components';

export const TaskList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: grid;
    grid-template-columns: 40px 1fr 24px;
    margin-bottom: 10px;
  }
`;

interface TaskTextProps {
  completed: boolean;
}

export const TaskText = styled.span<TaskTextProps>`
  margin-left: 10px;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  color: ${({ completed, theme }) => (completed
    ? theme.colors.disable
    : theme.colors.text)};
`;
