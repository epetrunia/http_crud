const yup = require('yup');
const { parse, isDate } = require('date-fns');

function parseDateString(value, originalValue) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, 'yyyy-MM-dd', new Date());

  return parsedDate;
}
const today = new Date();

module.exports.CREATE_USER_SCHEMA = yup.object().shape({
  firstName: yup.string().trim().required(),
  lastName: yup.string().trim().required(),
  email: yup.string().email().required(),
  birthday: yup.date().transform(parseDateString).max(today),
  isMale: yup.boolean(),
  passwordHash: yup.string().trim().required(),
});

module.exports.USER_UPDATE_SCHEMA = yup.object().shape({
  firstName: yup.string().trim(),
  lastName: yup.string().trim(),
  email: yup.string().email(),
  birthday: yup.date().transform(parseDateString).max(today),
  isMale: yup.boolean(),
  passwordHash: yup.string().trim(),
});
