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
  it("Should return success with only password, passwordLength, confirmPassword and email parameters being fullfilled", () => {});
  it("Should return an error if name has length === 1 ", () => {});
  it("Should return an error if passwordLength has length < 8 ", () => {});
});
