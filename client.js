import {getTodos, getTodo, addTodo, modifyTodo, deleteTodo  } from './todo.js';

import promptSync from 'prompt-sync';
import { validateAddParam, validateCommand, validateId } from './validate.js';
const prompt = promptSync();

const action = prompt('What would you like to do? (list, get, add, update, delete): ');
validateCommand(action)
function todoApp(){
    switch (action) {
        case "list":
            getTodos();
            break;
        case "get":
            const idToGet = prompt('Enter the id of the todo you want to read: ');
            validateId(idToGet)
            getTodo(idToGet);
            break;
        case "add":
            const todoName = prompt('Enter the name of the todo you want to add: ');
            validateAddParam(todoName)
            addTodo(todoName);
            break;

        case "update":
            const idToUpdate = prompt('Enter the id of the todo you want to update: ');
            validateId(idToUpdate)
            const updatedName = prompt('Enter the new name: ');
            validateAddParam(updatedName)
            modifyTodo(idToUpdate, updatedName);
            break;
    
        case "delete":
            const idToDelete = prompt('Enter the id of the todo you want to delete: ');
            validateId(idToDelete)
            deleteTodo(idToDelete);
            break;
        default:
            break;
    }
}

todoApp();