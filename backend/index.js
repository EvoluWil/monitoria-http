import express from 'express';
import { todoRouter } from './src/routes/todo.js';
import cors from 'cors';

const PORT = 3001;
const app = express();
app.use(cors());

app.use(express.json());


// métodos HTTP
// GET: pegar, buscar
// POST: criar, inserir
// PUT: Atualizar, Editar
// DELETE: Deletar, remover
app.get('/', (request, response) => {
  return response.send('Bem vindo a api da turma 35');
});

app.use('/todos', todoRouter);


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});

// Exceções HTTP
// 1xx: Informativo
// 2xx: Sucesso, 200 OK, 201 Created, 204 No Content
// 3xx: Redirecionamento
// 4xx: Erro do cliente, 404 Not Found, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 409 Conflict
// 5xx: Erro do servidor, 500 Internal Server Error, 503 Service Unavailable