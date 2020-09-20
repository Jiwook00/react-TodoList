module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "todo-list",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "todo-list",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "todo-list",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}