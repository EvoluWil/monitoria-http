import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { AlertMessage } from './components/AlertMessage/AlertMessage';
import { Task } from './model/Task.model';
import { Tasks } from './components/Tasks/Tasks';
import { Input } from './components/Input/Input';
import { Button } from './components/Button/Button';
import { GlobalStyle } from './styles/Global.style';
import { themeLight, themeDark } from './styles/theme';
import { IconButton } from './components/IconButton/IconButton';
import { RightContainer } from './styles/RightContainer';
import { TitleStyled } from './components/Title/Title.style';
import { api } from './services/api';

type Alert = {
  type: 'SUCCESS' | 'ERROR';
  message: string;
};

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

function App(): JSX.Element {
  const [theme, setTheme] = useState(localStorage.getItem('@todo:theme') || 'light');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');
  const [alert, setAlert] = useState<Alert | null>(null);

  const handleAddTask = async () => {
    if (newTask.trim() !== '') {
      await api.post('/todos', { title: newTask });

      // await fetch('http://localhost:3001/todos', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ title: newTask }),
      // });

      await getData();
      setNewTask('');
      setAlert({ type: 'SUCCESS', message: 'Tarefa adicionada com sucesso!' });
    } else {
      setAlert({
        type: 'ERROR',
        message: 'Por favor, adicione uma tarefa válida.',
      });
    }
  };

  const handleTaskComplete = async (id: string) => {
    await api.put(`/todos/${id}`);
    await getData();
  };

  const handleRemoveTask = async (id: string): Promise<void> => {
    await api.delete(`/todos/${id}`);
    await getData();
  };

  const toggleTheme = (): void => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('@todo:theme', newTheme);
    setTheme(newTheme);
  };

  const getData = async () => {
    const { data } = await api.get<Task[]>('/todos');

    // const response = await fetch('http://localhost:3001/todos');
    // const data = await response.json();

    setTasks(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ThemeProvider theme={ theme === 'light' ? themeLight : themeDark }>
      <GlobalStyle />
      <RightContainer>
        <IconButton
          onClick={ toggleTheme }
          icon={ theme === 'light' ? 'moon-o' : 'sun-o' }
          color={ theme === 'light' ? '#272222' : '#f8ba00' }
          hasBorder={ false }
        />
      </RightContainer>
      <Container>
        <TitleStyled>Minhas Tarefas</TitleStyled>
        <Input
          type="text"
          placeholder="Adicionar nova tarefa"
          value={ newTask }
          onChange={ (e): void => setNewTask(e.target.value) }
        />
        <Button onClick={ handleAddTask }>Adicionar Tarefa</Button>
        {alert && <AlertMessage type={ alert.type }>{alert.message}</AlertMessage>}
        <Tasks
          tasks={ tasks }
          onChange={ handleTaskComplete }
          onDelete={ handleRemoveTask }
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
