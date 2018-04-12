const express = require('express')

let routes = function (db) {
  let TodoRouter = express.Router()
  let TodoController = require('../Controllers/TodoController')(db)
  TodoRouter.route('/')
    .get(TodoController.get)

    .post(TodoController.post)

    // Update the values of the todo  by selecting an id
    .put(function (req, results) {
      if (!req.body.id) { results.send('there is nothing selected to update') } else {
        let id = req.body.id
        let text = req.body.text
        let checked = req.body.checked
        let texts = 'UPDATE todos set text = $1, checked = $2 WHERE id=$3'
        let VALUES = [text, checked, id]
        db.query(texts, VALUES, (err, res) => {
          if (err) { results.send(err.stack) } else {
            results.status(203).send('updated')
          }
        })
      }
    })

    // delete an item from the todo list
    .delete(function (req, results) {
      let id = req.body.id
      let texts = 'DELETE FROM  todos WHERE id = $1'
      db.query(texts, [id], (err, res) => {
        if (err) { results.send(err.stack) } else {
          results.status(204).send('Removed')
        }
      })
    })

  return TodoRouter
}
module.exports = routes
