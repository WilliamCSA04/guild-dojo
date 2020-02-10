import axios from "axios";
import mockAxios from "axios-mock-adapter";

const mock = new mockAxios(axios);

export function validateEmail(email) {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.match(regex);
}

export default function buildMock(params) {
  const { email } = params;
  const invalidEmail = !validateEmail(email);
  const hasErrors = invalidEmail;
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
