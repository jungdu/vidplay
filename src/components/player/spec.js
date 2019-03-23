import React from "react";
import MainPlayer from "./MainPlayer";
import { shallow } from "enzyme";
import { checkProps } from "../../Utils";

describe("MainPlayer Component", () => {
  describe("Checking PoroTypes", () => {
    it("Should Not Throw a warning", () => {
      const expectedProps = { playing: "file1" };
      const propsError = checkProps(MainPlayer, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Component Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        playing: "file1",
      };
      wrapper = shallow(<div {...props} />);
    });

    it("Should renders without error", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
