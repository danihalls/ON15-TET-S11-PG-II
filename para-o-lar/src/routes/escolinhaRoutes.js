
const express = require("express")

const controller = require("../controller/escolinhaController")

const routes = express.Router()

routes.get("/todos", controller.todosAlunos)

module.exports = routes
