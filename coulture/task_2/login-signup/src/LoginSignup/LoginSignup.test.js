import React from "react";
import { shallow } from "enzyme";
import LoginSignup from "./LoginSignup";

describe("LoginSignup Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<LoginSignup />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the initial state correctly", () => {
    const wrapper = shallow(<LoginSignup />);

    // Ensure the default state is as expected
    const initialAction = wrapper.find(".text").text();
    expect(initialAction).toBe("Sign Up");
  });

  it("changes action state on Sign Up click", () => {
    const wrapper = shallow(<LoginSignup />);

    // Find the Sign Up button and simulate a click
    wrapper.find(".submit-container button").at(0).simulate("click");

    // Ensure the rendered text is updated correctly
    const updatedAction = wrapper.find(".text").text();
    expect(updatedAction).toBe("Sign Up");
  });

  it("changes action state on Login click", () => {
    const wrapper = shallow(<LoginSignup />);

    // Find the Login button and simulate a click
    wrapper.find(".submit-container button").at(1).simulate("click");

    // Ensure the rendered text is updated correctly
    const updatedAction = wrapper.find(".text").text();
    expect(updatedAction).toBe("Login");
  });
});
