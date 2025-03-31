import { Router } from 'express';

import { Todo } from '../models/todo';


type RequestBody = {  text: string };
type RequestParams = { todoid: string };

let todos: Todo[] = [];

const router = Router();

router.get('/', (req, res, next) => {
    res.status(200).json({todos: todos});
});

router.post('/todo', (req, res, next) => {
    const body = req.body as RequestBody;
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: body.text,
    };

    todos.push(newTodo);

    res.status(200).json({message: 'Todo created!', todo: newTodo, todos: todos });
});

router.put('/todo/:todoid', (req, res, next) => {
    const params = req.params as RequestParams;
    const body = req.body as RequestBody;
    const todoId = params.todoid;
    const todoIndex = todos.findIndex(t => t.id === todoId);
    if (todoIndex >= 0) {

        todos[todoIndex] = { id: todos[todoIndex].id, text: body.text};
        res.status(200).json({message: 'Todo updated!', todos: todos });
    }
    res.status(404).json({ message: 'Todo not found!' });
});


router.delete('/todo/:todoid', (req, res, next) => {
    const params = req.params as RequestParams;
  todos = todos.filter(todoItem => todoItem.id !== params.todoid);
    res.status(200).json({message: 'Todo deleted!', todos: todos });
});




export default router;