import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  console.log(err.inner);

  err.inner.forEach(error => {
    validationErrors[String(error.path)] = error.message;
  });

  return validationErrors;
}
