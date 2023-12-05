import express from 'express';
import { todoList } from '../data/todo-list.js';
import { v4 as uuid } from 'uuid';

export const todoRouter = express.Router();

todoRouter.get('/', (_, response) => { 
  return response.json(todoList);
})

todoRouter.get('/:id', (request, response) => {
  const { id } = request.params;

  const todo = todoList.find((todo) => todo.id === id);

  if (!todo) {
    return response.status(404).json({ error: 'Todo não encontrada' });
  }

  return response.json(todo);
})

todoRouter.post('/', (request, response) => {
  const { title } = request.body;

  if (!title) {
    return response.status(400).json({ error: 'Title é obrigatório' });
  }

  const todoIndex = todoList.findIndex((todo) => todo.title === title);

  if (todoIndex !== -1) {
    return response.status(409).json({ error: 'Todo já cadastrada' });
  }
  
  const newTodo = {
    id: uuid(),
    title,
    completed: false
  }

  todoList.push(newTodo);

  return response.status(201).json(newTodo);
})

todoRouter.put('/:id', (request, response) => {
  const { id } = request.params;

  const todoIndex = todoList.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return response.status(404).json({ error: 'Todo não encontrada' });
  }

  const todo = {    
    ...todoList[todoIndex],
    completed: !todoList[todoIndex].completed
  }

  todoList[todoIndex] = todo;

  return response.json(todo);
})

todoRouter.delete('/:id', (request, response) => {
  const { id } = request.params;

  const todoIndex = todoList.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return response.status(404).json({ error: 'Todo não encontrada' });
  }

  todoList.splice(todoIndex, 1);

  return response.status(204).send();
})