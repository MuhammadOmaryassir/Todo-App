const express = require('express')

let routes = function (db) {
  let TodoRouter = express.Router()
  let TodoController = require('../Controllers/TodoController')(db)
  TodoRouter.route('/')
    .get(TodoController.get)

    .post(TodoController.post)

    .put(function (req, results) {
      if (!req.body.id) { results.send('there is nothing selected to update') } else {
        let id = req.body.id
        let text = req.body.text
        let checked = req.body.checked
        let texts = 'UPDATE todos set text = $1, checked = $2 WHERE id=$3'
        let VALUES = [text, checked, id]
        db.query(texts, VALUES, (err, res) => {
          if (err) { console.log(err.stack) } else {
            results.send(res.rows[0])
          }
        })
      }
    })

    .delete(function (req, res) {})

  return TodoRouter
}
module.exports = routes
