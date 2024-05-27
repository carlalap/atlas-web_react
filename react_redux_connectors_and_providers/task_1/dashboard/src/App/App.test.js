// App.test.js
import { shallow, mount, configure } from "enzyme";
import Adapter from '@cfaester/enzyme-adapter-react-18';
import React from "react";
import App, { mapStateToProps } from "./App";
import { StyleSheetTestUtils } from "aphrodite";
import { fromJS } from "immutable";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import uiReducer, { initialState } from "../reducers/uiReducer";

// Configure Enzyme for React 18
configure({ adapter: new Adapter() });

// Create Store
const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
  preloadedState: {
    ui: initialState,
  },
});

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
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it("mapStateToProps returns the right object from user Login", () => {
    let state = fromJS({
      ui: { isUserLoggedIn: true },
    });

    const result = mapStateToProps(state.toJS());
    expect(result).toEqual({ isLoggedIn: true });
  }); 

  it("mapStateToProps returns the right object from display Drawer", () => {
    let state = fromJS({
      ui: { isNotificationDrawerVisible: true },
    });

    const result = mapStateToProps(state.toJS());
    expect(result).toEqual({ displayDrawer: true });
  });

});
