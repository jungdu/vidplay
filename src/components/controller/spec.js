import VidList from "./VidList";
import { checkProps } from "../../Utils";

describe("VidList Component", () => {
  describe("checking PropTypes", () => {
    it("Shuld Not throw a warning", () => {
      const expectedProps = { vidList: ["file"], selectedFile: "file" };
      const propsError = checkProps(VidList, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
});
