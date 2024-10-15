import {getTodos, getTodo, addTodo, modifyTodo, deleteTodo  } from './todo.js';

import promptSync from 'prompt-sync';

const prompt = promptSync();

const action = prompt('What would you like to do? (get, getOne, add, update, delete): ');
function todoApp(){
    switch (action) {
        case "get":
            getTodos();
            break;

        case "getOne":
            const idToGet = prompt('Enter the id of the todo you want to read: ');
            getTodo(idToGet);
            break;

        case "add":
            const todoName = prompt('Enter the name of the todo you want to add: ');
            addTodo(todoName);
            break;

        case "update":
            const idToUpdate = prompt('Enter the id of the todo you want to update: ');
            modifyTodo(idToUpdate);
            break;
    
        case "delete":
            const idToDelete = prompt('Enter the id of the todo you want to delete: ');
            deleteTodo(idToDelete);
            break;
    
        default:
            break;
    }
}

todoApp();