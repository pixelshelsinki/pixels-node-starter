const { Model } = require('objection')

class Person extends Model {
  static get tableName() {
    return 'persons';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['firstName', 'lastName', 'email'],
      properties: {
        id: { type: 'integer' },
        firstName: { type: 'string', minLength: 1, maxLength: 50 },
        lastName: { type: 'string', minLength: 1, maxLength: 50 },
        email: { type: 'email' },
      },
    };
  }
}

module.exports = Person;
