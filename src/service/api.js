import axios from "axios";
import mockAxios from "axios-mock-adapter";

const mock = new mockAxios(axios);
export default function buildMock(params) {
  mock.onPost("/user", params).reply(200, {
    users: params
  });
}
