const {Client} = require('pg')
let connect = function () {
  const connectionString = 'postgresql://nest:12345@localhost:5432/NestDB'

  let client = new Client({
    connectionString: connectionString
  })

  client.connect()
  return client
}
module.exports.DataBase = connect
