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
    seeds: {
      directory: './src/database/seeds/',
    },
    migrations: {
      directory: './src/database/migrations/',
    },
  },

  test: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './local-test.db',
    },
    pool: {
      afterCreate: (conn, cb) => {
        conn.run('PRAGMA foreign_keys = ON', cb);
      },
    },
    seeds: {
      directory: './src/database/seeds/tests/',
    },
    migrations: {
      directory: './src/database/migrations/',
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
  //   seeds: {
  //     directory: './src/database/seeds/',
  //   },
  //   migrations: {
  //     directory: './src/database/migrations/',
  //   },
  // },

  // // MySQL production example
  // production: {
  //   client: 'mysql',
  //   connection: {
  //     host: process.env.DB_HOST,
  //     user: process.env.DB_USER,
  //     password: process.env.DB_PASSWORD,
  //     database: process.env.DB_NAME,
  //   },
  //   pool: { min: 0, max: 7 },
  //   seeds: {
  //     directory: './src/database/seeds/',
  //   },
  //   migrations: {
  //     directory: './src/database/migrations/',
  //   },
  // },
}
