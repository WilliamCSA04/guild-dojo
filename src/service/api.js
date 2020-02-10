import axios from "axios";
import mockAxios from "axios-mock-adapter";

const mock = new mockAxios(axios);

export function validateEmail(email) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.match(regex);
}

export function validateAge(age) {
  const isNumber = Number.isInteger(parseInt(age));
  const minimumAge = 18;
  return isNumber && age >= minimumAge;
}

export function validateName(name) {
  const nameSize = name.length;
  const minimumLength = 2;
  return nameSize >= minimumLength;
}

export function validatePassword(
  password,
  confirmPassword,
  passwordPreHashLength
) {
  const arePasswordsEqual = confirmPassword === password;
  const minimumLength = 8;
  return arePasswordsEqual && minimumLength <= passwordPreHashLength;
}

export default function buildMock(params) {
  const { passwordLength, ...requestParams } = params;
  const { name, email, age, password, confirmPassword } = requestParams;
  const invalidName = !validateName(name);
  const invalidEmail = !validateEmail(email);
  const invalidAge = !validateAge(age);
  const invalidPassword = !validatePassword(
    password,
    confirmPassword,
    passwordLength
  );
  const hasErrors =
    invalidName || invalidEmail || invalidAge || invalidPassword;
  if (hasErrors) {
    mock.onPost("/user", requestParams).reply(418, {
      users: requestParams
    });
  } else {
    mock.onPost("/user", requestParams).reply(200, {
      users: requestParams
    });
  }
}
