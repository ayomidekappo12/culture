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
    expect(wrapper.state("action")).toBe("Sign Up");

    // Ensure the initial rendered text is correct
    expect(wrapper.find(".text").text()).toBe("Sign Up");
  });

  it("changes action state on Sign Up click", () => {
    const wrapper = shallow(<LoginSignup />);

    // Simulate a click on the "Sign Up" button
    wrapper.find(".submit").at(0).simulate("click");

    // Ensure the state is updated correctly
    expect(wrapper.state("action")).toBe("Sign Up");

    // Ensure the rendered text is updated correctly
    expect(wrapper.find(".text").text()).toBe("Sign Up");
  });

  it("changes action state on Login click", () => {
    const wrapper = shallow(<LoginSignup />);

    // Simulate a click on the "Login" button
    wrapper.find(".submit").at(1).simulate("click");

    // Ensure the state is updated correctly
    expect(wrapper.state("action")).toBe("Login");

    // Ensure the rendered text is updated correctly
    expect(wrapper.find(".text").text()).toBe("Login");
  });

  // Add more test cases for other functionalities as needed
});
