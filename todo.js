export const addTodo = (todoName) => {
    fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ todo: `${todoName}` })
    })
        .then(res => res.json()
        )
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.error(err)
        });
}

export const getTodos = () => {
    fetch("http://localhost:3000/todo")
        .then(res => res.json()
        )
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.error(err)
        });
}

export const getTodo = (id) => {
    fetch(`http://localhost:3000/todo/${id}`)
        .then(res => res.json()
        )
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.error(err)
        });
}


export const modifyTodo = (id) => {
    fetch(`http://localhost:3000/todo/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ todo: "updated" })
    })
        .then(res => res.json()
        )
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.error(err)
        });
}

export const deleteTodo = (id) => {

    fetch(`http://localhost:3000/todo/delete/${id}`, {
        method: "DELETE"
    })
        .then(res => res.json()
        )
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.error(err)
        });
}
