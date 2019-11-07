require('dotenv').config()

module.exports = {

  // SQLite for local dev.
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './local.db',
    },
    pool: {
      afterCreate: (conn, cb) => {
        conn.run('PRAGMA foreign_keys = ON', cb);
      },
    },
  },

  // PostgreSQL production example.
  // production: {
  //   client: 'pg',
  //   connection: process.env.DB_URL,
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  // },

  // MySQL production example
  // production: {
  //   client: 'mysql',
  //   connection: {
  //     host: process.env.DB_HOST,
  //     user: process.env.DB_USER,
  //     password: process.env.DB_PASSWORD,
  //     database: process.env.DB_NAME,
  //   },
  //   pool: { min: 0, max: 7 },
  // },
}
