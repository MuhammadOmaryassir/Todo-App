let TodoController = function (db) {
  // handle post requests
  const post = function (req, results) {
    let text = req.body.text
    let checked = req.body.checked
    const texts = 'INSERT INTO todos(text, checked) VALUES($1, $2) RETURNING *' // query
    const values = [text, checked]
    // console.log(values)

    db.query(texts, values, (err, res) => {
      if (err) { results.send(err.stack) } else {
        results.send(res.rows[0])
        // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
      }
    })
  }

  // get all the data in the Data base
  const get = function (req, results) {
    const texts = 'SELECT * from todos '
    db.query(texts, (err, res) => {
      if (err) { results.send(err.stack) } else {
        results.send(res.rows)
      }
    })
  }
  return {
    post: post,
    get: get
  }
}

module.exports = TodoController
