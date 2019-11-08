const path = require('path');
const { Model } = require('objection')
const { BaseModel } = require('./BaseModel')

class Project extends BaseModel {
  static get tableName() {
    return 'projects';
  }

  static get relationMappings() {
    return {
      tasks: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, 'Task'),
        join: {
          from: 'projects.id',
          to: 'tasks.projectID',
        },
      },
    }
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 50 },
      },
    };
  }
}

module.exports = Project;
