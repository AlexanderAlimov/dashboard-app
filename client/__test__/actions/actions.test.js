import * as actions from "../../src/actions/index";

describe("actions", () => {
  it("should create an action to add category synchronize", () => {
    const payload = {
      name: "testCategory",
      _id: "123456789asdfghjkl"
    };
    const expectedAction = {
      type: "ADD_CATEGORY",
      payload
    };
    expect(actions.addCategorySync(payload)).toEqual(expectedAction);
  });
  it("shoul create a syncronize action to login", () => {
    const payload = true;
    const expectedAction = {
      type: "IS_LOGIN",
      payload
    };
    expect(actions.isLoginSync(payload)).toEqual(expectedAction);
  });
});
