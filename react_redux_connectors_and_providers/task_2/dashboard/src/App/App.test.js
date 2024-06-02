// App.test.js
import { shallow, configure } from "enzyme";
import Adapter from '@cfaester/enzyme-adapter-react-18';
import React from "react";
import { App, mapStateToProps } from "./App";  // Adjusted import to get the unconnected App component
import { StyleSheetTestUtils } from "aphrodite";
import { fromJS } from "immutable";
import uiReducer, { initialState } from "../reducers/uiReducer";

// Configure Enzyme for React 18
configure({ adapter: new Adapter() });

describe("<App />", () => {
  // Suppress Aphrodite style injection for tests
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  // Restore Aphrodite style injection after tests
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it("mapStateToProps returns the right object from user Login", () => {
    let state = fromJS({
      ui: { isUserLoggedIn: true },
    });

    const result = mapStateToProps(state);
    expect(result).toEqual({ isLoggedIn: true });
  });

  it("mapStateToProps returns the right object from display Drawer", () => {
    let state = fromJS({
      ui: { isNotificationDrawerVisible: true },
    });

    const result = mapStateToProps(state);
    expect(result).toEqual({ displayDrawer: true });
  });
});
