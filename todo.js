export default function addTodo() {
    fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ todo: "first" })
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

export default function getTodos() {
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

export default function getTodo(id) {
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


export default function modifyTodo(id) {
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

export default function deleteTodo(id) {

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
