const yup = require('yup');

module.exports.CREATE_USER_SCHEMA = yup.object().shape({
  firstName: yup.string().trim().required(),
  lastName: yup.string().trim().required(),
  email: yup.string().email().required(),
  birthday: date().transform(parseDateString).max(today),
  isMale: yup.boolean(),
  passwordHash: yup.string().trim().required(),
});

module.exports.USER_UPDATE_SCHEMA = yup.object().shape({
  firstName: yup.string().trim(),
  lastName: yup.string().trim(),
  email: yup.string().email(),
  birthday: date().transform(parseDateString).max(today),
  isMale: yup.boolean(),
  passwordHash: yup.string().trim(),
});
