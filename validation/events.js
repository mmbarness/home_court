const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateEventInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';
  data.description = validText(data.description) ? data.description : '';

  if (!Validator.isLength(data.title, { min: 5, max: 50 })) {
    errors.title = 'Title must be between 5 and 50 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Text field is required';
  }


  if (!Validator.isLength(data.description, { min: 5, max: 140 })) {
    errors.title = 'Description must be between 5 and 140 characters';
  }

  if (Validator.isEmpty(data.description)) {
    errors.title = 'Text field is required';
  }
  
  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};