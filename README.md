# Pixels Node Starter

This is the starter base for Pixels projects using Node.js. The template is API first starting point without frontend.

## Issues, improvements and these instructions.

Please read the documentation below before using. **If things are not clear or you find a mistake, or simply a way to improve the theme, please submit an issue or pull request.**

## Tools and Technologies

* |Express|(https://expressjs.com/) - Node framework
* |Objection.js|(https://vincit.github.io/objection.js/) - ORM
* |Knex|(http://knexjs.org/) - Query builder
* SQL databae of your choice
* |Nodemon|(https://www.npmjs.com/package/nodemon) - dev server

## Requirements

* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/lang/en/)
* [PostgresQL](https://www.postgresql.org/), [PostgresQL](https://www.mysql.com/), SQLite or other Knex supported SQL.

## Installation

1. Download the repository
2. Set up env file based on .env.example for DB access
3. Create your own tables or run `knex migrate:latest && knex seed:run` to get example database set up.
4. `yarn run watch` for dev mode or `yarn run start` for production


## Example models & controllers

The repository has simple Person model and Persons Controller. 

* Person model corresponds with persons table in database. 
* Persons Controller has endpoints for GET, POST, PUT and DELETE HTTP methods.