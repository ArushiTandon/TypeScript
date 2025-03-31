"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(200).json({ message: 'Todo created!', todo: newTodo, todos: todos });
});
router.put('/todo/:todoid', (req, res, next) => {
    const todoId = req.params.todoid;
    const todoIndex = todos.findIndex(t => t.id === todoId);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        res.status(200).json({ message: 'Todo updated!', todos: todos });
    }
    res.status(404).json({ message: 'Todo not found!' });
});
router.delete('/todo/:todoid', (req, res, next) => {
    todos = todos.filter(todoItem => todoItem.id !== req.params.todoid);
    res.status(200).json({ message: 'Todo deleted!', todos: todos });
});
exports.default = router;
