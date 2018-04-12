const express = require('express')

let routes = function (db) {
  let TodoRouter = express.Router()
  let TodoController = require('../Controllers/TodoController')(db)
  TodoRouter.route('/')
    .get(TodoController.get)

    .post(TodoController.post)

    .put(function (req, res) {})
    .delete(function (req, res) {})

  return TodoRouter
}
module.exports = routes
