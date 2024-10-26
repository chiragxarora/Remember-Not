import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CredentialCard from "../../Components/CredentialCard";
import "@testing-library/jest-dom"; // for the toBeInTheDocument matcher
import thunk from "redux-thunk"; // Add thunk for handling async actions

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock("../../Redux/Actions", () => ({
  getCredentialData: jest.fn(() => ({ type: "GET_CREDENTIAL_DATA" })),
  updateCredentialData: jest.fn(() => ({ type: "UPDATE_CREDENTIAL_DATA" })),
  deleteCredentialData: jest.fn(() => ({ type: "DELETE_CREDENTIAL_DATA" })),
  validateMe: jest.fn(() => ({ type: "VALIDATE_ME" })),
}));

describe("CredentialCard Component", () => {
  let store;

  const renderWithProvider = (state) => {
    store = mockStore(state);

    render(
      <Provider store={store}>
        <CredentialCard
          credential={{
            websiteId: { name: "Test Site", link: "https://test.com" },
            _id: "1",
          }}
        />
      </Provider>
    );
  };

  test("renders with valid credentials", () => {
    renderWithProvider({
      credData: { id: "1", loginId: "user123", password: "pass123" },
      auth: { valid: true },
    });

    expect(screen.getByText("Test Site")).toBeInTheDocument();
    expect(screen.getByText("login id : user123")).toBeInTheDocument();
    expect(screen.getByText("password : pass123")).toBeInTheDocument();
  });

  test("displays masked login id and password when not valid", () => {
    renderWithProvider({
      credData: { id: "1", loginId: "user123", password: "pass123" },
      auth: { valid: false },
    });

    expect(screen.getByText("login id : xxxxxxxxxx")).toBeInTheDocument();
    expect(screen.getByText("password : xxxxxxxxxx")).toBeInTheDocument();
  });

  test("opens the Delete modal on button click", () => {
    renderWithProvider({
      credData: { id: "1", loginId: "user123", password: "pass123" },
      auth: { valid: true },
    });

    fireEvent.click(screen.getByText("Delete"));
    expect(screen.getByText("Delete this credential?")).toBeInTheDocument();
  });

  test("does not enable Edit and Delete buttons when not valid", () => {
    renderWithProvider({
      credData: { id: "2", loginId: "user123", password: "pass123" },
      auth: { valid: false },
    });

    const editButton = screen.getByText("Edit");
    const deleteButton = screen.getByText("Delete");

    expect(editButton).toBeDisabled();
    expect(deleteButton).toBeDisabled();
  });

  test("opens the Edit modal on button click", () => {
    renderWithProvider({
      credData: { id: "1", loginId: "user123", password: "pass123" },
      auth: { valid: true },
    });

    fireEvent.click(screen.getByText("Edit"));
    expect(screen.getByText("Edit this credential?")).toBeInTheDocument();
  });

  test("closes the Delete modal without submitting", () => {
    renderWithProvider({
      credData: { id: "1", loginId: "user123", password: "pass123" },
      auth: { valid: true },
    });

    fireEvent.click(screen.getByText("Delete"));
    fireEvent.click(screen.getByText("Disagree"));
    expect(screen.queryByText("Delete this credential?")).not.toBeInTheDocument();
  });
});
