import buildMock from "./api";
import axios from "axios";

describe("API requests", () => {
  it("Should return success with all parameters", () => {
    const data = {
      name: "asdfasd",
      age: "18",
      email: "hakuna@matata.com",
      password: "éLindoDizer",
      passwordLength: "9",
      confirmPassword: "éLindoDizer"
    };
    buildMock(data);
    delete data.passwordLength;
    return axios
      .post("/user", data)
      .then(res => expect(res.data).toEqual({ users: data }));
  });
});
