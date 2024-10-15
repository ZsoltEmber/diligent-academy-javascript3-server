import { readFileSync } from "fs";

export function validateCommand(command) {
    const commands = ["get", "add", "update", "delete"]
    if (commands.includes(command)) {
        return command;
    }
    else {
        throw new Error("Parameter is not a command, try: 'get', 'add', 'update' or 'delete'")
    }
}

export function validateId(id) {
    if (isNaN(Number(id))) {
        throw new Error('The ID must be a number');
    }
    if (Number(id) < 1) {
        throw new Error('The ID must be a positive number');
    }
    const todos = JSON.parse(readFileSync("data.json", "utf-8"));
    const allId = todos.forEach(todo => ids.push(todo.id))
    if (allId.contains(id)) {
        return Number(id);
    }else{
        throw new Error(`No todo found with ID: ${id}`)
    }


}