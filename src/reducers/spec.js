import { CLOSE_LIST, OPEN_LIST, FETCH_VIDS, SELECT_VID } from "../actions/types";
import vidReducer, { initialState as vidInitialState, getSource } from "./vidReducer";

describe("vidReducer", () => {
  it("Should return default state", () => {
    const newState = vidReducer(undefined, {});
    expect(newState).toEqual(vidInitialState);
  });

  it("Should return new state if receving videolist", () => {
    const videos = ["file1", "file2", "file3"];
    const expecteState = {
      ...vidInitialState,
      vidList: videos,
    };
    const newState = vidReducer(undefined, {
      type: FETCH_VIDS,
      payload: videos,
    });
    expect(newState).toEqual(expecteState);
  });

  it("Should return selectedFile", () => {
    const selectedFile = "file1";
    const expecteState = {
      ...vidInitialState,
      selectedFile,
      playing: getSource(selectedFile),
    };
    const newState = vidReducer(undefined, {
      type: SELECT_VID,
      payload: selectedFile,
    });
    expect(newState).toEqual(expecteState);
  });
});
