const Validator = require('validator');
const validTitle = require('./valid-title');

module.exports = function validateEventInput(data) {
  let errors = {};

  data.title = validTitle(data.title) ? data.title : '';

  if (!Validator.isLength(data.title, { min: 5, max: 140 })) {
    errors.title = 'Tweet must be between 5 and 140 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Text field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};