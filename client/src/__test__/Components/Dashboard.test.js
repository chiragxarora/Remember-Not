import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Dashboard from "../../Components/Dashboard";
import "@testing-library/jest-dom"; // Import for toBeInTheDocument

// Mock the Offline component
jest.mock("../../Components/Offline", () => () => <div>Offline Component</div>);

const mockStore = configureStore([]);

describe("Dashboard Component", () => {
  let store;

  const renderWithProvider = (authState) => {
    store = mockStore({
      auth: authState,
    });

    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
  };

  test("renders Offline component when auth is inactive", () => {
    renderWithProvider({ active: false });
    expect(screen.getByText("Offline Component")).toBeInTheDocument();
  });

  test("does not render user information or tabs when auth is inactive", () => {
    renderWithProvider({ active: false });
    expect(screen.queryByText("Username:")).not.toBeInTheDocument();
    expect(screen.queryByText("Tab 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Tab 2")).not.toBeInTheDocument();
    expect(screen.queryByText("Tab 3")).not.toBeInTheDocument();
  });

  test("renders user information when auth is active", () => {
    const mockAuthData = {
      active: true,
      data: {
        user: {
          name: "John Doe",
          role: "Admin",
          email: "johndoe@example.com",
        },
      },
    };
    renderWithProvider(mockAuthData);

    expect(screen.getByText("Username: John Doe")).toBeInTheDocument();
    expect(screen.getByText("Role: Admin")).toBeInTheDocument();
    expect(screen.getByText("Email: johndoe@example.com")).toBeInTheDocument();
  });

  test("does not render wrong user information in user details dashboard", () => {
    const mockAuthData = {
        active: true,
        data: {
          user: {
            name: "Jenny Dee",
            role: "User",
            email: "jennydee@example.com",
          },
        },
      };
    renderWithProvider(mockAuthData);
    expect(screen.queryByText("Username: John Doe")).not.toBeInTheDocument();
    expect(screen.queryByText("Role: Admin")).not.toBeInTheDocument();
    expect(screen.queryByText("Email: johndoe@example.com")).not.toBeInTheDocument();
  });

  test("renders all tabs when auth is active", () => {
    renderWithProvider({ active: true, data: { user: {} } });

    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Tab 3")).toBeInTheDocument();
  });

  test("renders correct content for each tab", () => {
    renderWithProvider({ active: true, data: { user: {} } });

    screen.getByText("Tab 1").click();
    expect(screen.getByText("Tab 1 Content")).toBeInTheDocument();

    screen.getByText("Tab 2").click();
    expect(screen.getByText("Tab 2 Content")).toBeInTheDocument();

    screen.getByText("Tab 3").click();
    expect(screen.getByText("Tab 3 Content")).toBeInTheDocument();
  });

  test("does not render any tab content if auth is inactive", () => {
    renderWithProvider({ active: false });
    expect(screen.queryByText("Tab 1 Content")).not.toBeInTheDocument();
    expect(screen.queryByText("Tab 2 Content")).not.toBeInTheDocument();
    expect(screen.queryByText("Tab 3 Content")).not.toBeInTheDocument();
  });
});
