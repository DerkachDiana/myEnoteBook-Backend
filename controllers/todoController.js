class TodoController {
    async getTodoByLayoutId(req, res) {
        const a = req.query.id;
        res.json(a)
    }

    async addTodo(req, res) {
    }

    async updateTodo(req, res) {

    }

    async removeTodoById(req, res) {

    }

    async removeTodoByTodoLayoutId(req, res) {

    }
}

module.exports = new TodoController()
