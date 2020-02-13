# Pixels Node Starter

This is the starter base for Pixels projects using Node.js. The template is API first starting point without frontend.

## Issues, improvements and these instructions.

Please read the documentation below before using. **If things are not clear or you find a mistake, or a way to improve the template, please submit an issue or pull request.**

## Tools and Technologies

* [Express](https://expressjs.com/) - Node framework
* [Objection.js](https://vincit.github.io/objection.js/) - ORM
* [Knex](http://knexjs.org/) - Query builder
* SQL database of your choice
* [Jest](https://jestjs.io/) and [Supertest](https://github.com/visionmedia/supertest) - tests suites
* [Nodemon](https://www.npmjs.com/package/nodemon) - dev server

## Requirements

* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/lang/en/)
* [PostgresQL](https://www.postgresql.org/), [MySQL](https://www.mysql.com/), [SQLite](https://www.sqlite.org/index.html) or other Knex supported SQL database.

## Installation

1. Download the repository
2. Set up env file based on .env.example for DB access
3. Package.json has dependencies for PostgreSQL, MySQL and SQLite. Remove the ones you are not using.
3. Create your own tables or run `knex migrate:latest && knex seed:run` to get example database set up.
4. `yarn run dev` for dev mode or `yarn run start` for production


## Example models & controllers

The repository has simple models with relations and controllers.

* Person, Project and Task models correspond with tables in database. 
* Persons, Projects and Tasks controllers have endpoints for GET, POST, PUT and DELETE HTTP methods.
* Project can have many tasks
* Task can be assigned to one project

## Auth

Project contains JWT based service for locking endpoints behind login. Use `/api/login` endpoint to login with username & password. Endpoint returns JWT token, that you can include with authorization headers. Example database has user `root` with password `root`.

```
Header key: Authorization
Header value: Bearer YOUR_JWT_FROM_RESPONSE
```

App has middleware for authenticating tokens. To enable token authentication for endpoint, check truthiness of `request.authorized`.

```javascript
yourRouter.post('/:id', async (request, response, next) => {
  if( request.authorized ) {
  	// Your business logic here
  } else {
  	// Your error handling
  }
})
```

Or you can use requireAuth middleware to handle auth logic

```javascript
// Auth middleware
const { requireAuth } = require('../middleware/requireAuth')

yourRouter.post('/:id', requireAuth, async (request, response, next) => {
  // Your ordinary business logic.
})
```

## Tests & lint

Project comes with Eslint, Jest & Supertest. Eslint is configured to follow AirBnb-styleguide.

Lint commands:
`yarn run lint` --> lint errors
`yarn run lint:fix` --> autofix fixable errors

Test commands:
`yarn run tests::prepare` --> drops old test DB, creates new one from migrations & test seeds.
`yarn run test` --> Runs prepare & jest tests.

`tests` folder has example tests for one API endpoint using Jest & Supertest.


## Other use cases

The starter can be stripped down for other purposes.

#### Cloud Function

Starter can pretty easily be modified to run as cloud function.

As **Firebase Cloud Function**:

Swap index.js for Firebase cloudfunction index.

```
const functions = require('firebase-functions');
const app = require('./app')

// Hook starter on cloud function.
exports.app = functions.https.onRequest(app);
```

With **Serverless Framework** to AWS / GCP:

Swap index.js for Serverless setup.

```
const serverless = require('serverless-http');
const app = require('./app')

// Export starter with Serverless handler.
module.exports.app = serverless(app);
```

Then write appropriate serverless.yml for triggers and deployment.


#### Non-database app

If you don't need database portion, just remove following components:

- PostGres / MySQL / SQLite
- Knex & Models directory
- Database directory
- References to DB in main App

## Project structure

```
pixels-node-starter/                 # -> Project root
|-- controllers/                     # -> Controllers for endpoints
|-- database/                        # -> Database migrations & seeds
  |-- migrations/                    # -> Knex migrations
  |-- seeds/                         # -> Knex seeds
|-- middleware/                      # -> Express middleware
|-- models/                          # -> Objection.js DB models
|-- routes/                          # -> Route declarations
|-- services/                        # -> Services & business logic
|-- utils/                           # -> Misc. utils
|-- app.js                           # -> Express app
|-- index.js                         # -> Server entry point

```