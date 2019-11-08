const path = require('path');
const { Model } = require('objection')
const { BaseModel } = require('./BaseModel')

class Task extends BaseModel {
  static get tableName() {
    return 'tasks';
  }

  static get relationMappings() {
    return {
      project: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, 'Project'),
        join: {
          from: 'tasks.projectID',
          to: 'projects.id',
        },
      },
    }
  }
}

module.exports = Task;
