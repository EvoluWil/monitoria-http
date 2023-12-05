import { useTheme } from 'styled-components';
import { Task } from '../../model/Task.model';
import { Checkbox } from '../Checkbox/Checkbox.style';
import { IconButton } from '../IconButton/IconButton';
import { TaskList, TaskText } from './Tasks.style';

type TasksProps = {
  tasks: Task[];
  onChange: (taskId: string) => void;
  onDelete: (taskId: string) => void;
};

export function Tasks({ tasks, onChange, onDelete }: TasksProps) {
  const { colors } = useTheme();
  return (
    <TaskList>
      {tasks.map((task) => (
        <li key={ task.id }>
          <Checkbox
            type="checkbox"
            checked={ task.completed }
            onChange={ () => onChange(task.id) }
          />
          <TaskText completed={ task.completed }>{task.title}</TaskText>
          {task.completed && (
            <IconButton
              color={ colors.attention }
              onClick={ () => onDelete(task.id) }
              icon="trash"
            />
          )}
        </li>
      ))}
    </TaskList>
  );
}
