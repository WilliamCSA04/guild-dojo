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

export default function buildMock(params) {
  const { name, email, age } = params;
  const invalidName = !validateName(name);
  const invalidEmail = !validateEmail(email);
  const invalidAge = !validateAge(age);
  const hasErrors = invalidName || invalidEmail || invalidAge;
  if (hasErrors) {
    mock.onPost("/user", params).reply(418, {
      users: params
    });
  } else {
    mock.onPost("/user", params).reply(200, {
      users: params
    });
  }
}
