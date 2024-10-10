import { readFileSync, writeFileSync } from "fs";
import express from "express";
const port = 3000;
const todos = JSON.parse(readFileSync("data.json", "utf-8"));
const app = express();

app.use(express.json())

app.get("/todo", (req, res) => {
    if (todos.length != 0) {
        res.send(todos);
        res.status(200);
    } else {
        res.status(404)
    }
});

app.get("/todo/:id", (req, res) => {
    const { id } = req.params;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id))
    if (todoIndex != -1) {
        res.send(todos[todoIndex]);
    } else {
        res.status(404).json({ message: "todo not found" });
    }
});


app.post("/todo", (req, res) => {
    const newTodo = req.body;
    let lastId = 0;
    if (todos.length === 0) {
        lastId = 1
    } else {
        lastId = todos[todos.length - 1].id;
    }

    newTodo.id = lastId + 1;
    todos.push(newTodo);
    writeFileSync("data.json", JSON.stringify(todos));
    res.status(201).json(newTodo);
});


app.put("/todo/:id", (req, res) => {
    const { id } = req.params;
    const updatedTodo = req.body;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    if (todoIndex != -1) {
        todos[todoIndex] = { ...todos[todoIndex], ...updatedTodo };
        writeFileSync("data.json", JSON.stringify(todos));
        res.send(todos[todoIndex])
    } else {
        res.status(404).json({ message: "todo not found" })
    }
})

app.delete("/todo/delete/:id", (req, res) => {
    const { id } = req.params;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));

    if (todoIndex != -1) {
        todos.splice(todoIndex, 1)
        writeFileSync("data.json", JSON.stringify(todos));
        res.send(todos)
    } else {
        res.status(404).json({ message: "todo not found" })
    }
})

app.listen(port, () => {
    console.log("I'm in")
})