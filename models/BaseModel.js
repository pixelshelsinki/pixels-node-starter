const { Model } = require('objection');
const { DBErrors } = require('objection-db-errors');

class BaseModel extends DBErrors(Model) {

}

module.exports = {
  BaseModel
}