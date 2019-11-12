module.exports = {
  'extends': 'airbnb-base',
  'plugins': ['jest'],
  'env': {
      'node': true,
      'es6': true,
      'jest/globals': true,
  },
  'rules': {
    'semi': 0,
    'no-console': 0,
    'consistent-return' : 0,
  }
}