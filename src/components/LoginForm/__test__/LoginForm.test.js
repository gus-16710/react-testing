import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "..";
import { validateEmail } from "../LoginForm";

beforeEach(() => render(<LoginForm />, { wrapper: BrowserRouter }));

describe("LOGINFORM component", () => {
  test("✅ Render login form with (2) buttons", () => {
    const buttonList = screen.getAllByRole("button");
    expect(buttonList).toHaveLength(2);
  });

  test("✅ Should failed on email validation", () => {
    const testEmail = "gusmail.com";
    expect(validateEmail(testEmail)).not.toBe(true);
  });

  test("✅ Email input field should accept email", () => {
    const emailElement = screen.getByPlaceholderText(/enter email/i);
    userEvent.type(emailElement, "gus@mail.com");
    expect(emailElement.value).toMatch("gus@mail.com");
  });

  test("✅ Password input should have type password", () => {
    const passwordElement = screen.getByPlaceholderText(/password/i);
    expect(passwordElement.type).toBe("password");
    expect(passwordElement).toHaveAttribute("type", "password");
  });

  test("✅ Should be able to reset the form", () => {
    const emailElement = screen.getByPlaceholderText(/enter email/i);
    const passwordElement = screen.getByPlaceholderText(/password/i);
    const resetElement = screen.getByRole("button", { name: /reset/i });

    userEvent.click(resetElement);

    expect(emailElement.value).toBe("");
    expect(passwordElement.value).toBe("");
  });

  test("✅ Should be able to submit the form", () => {
    const emailElement = screen.getByPlaceholderText(/enter email/i);
    const passwordElement = screen.getByPlaceholderText(/password/i);
    const submitElement = screen.getByRole("button", { name: /submit/i });

    userEvent.type(emailElement, "gus@mail.com");
    userEvent.type(passwordElement, "******");
    userEvent.click(submitElement);

    const successElement = screen.getByText(/gus@mail.com/i);

    expect(successElement).toBeInTheDocument();
  })
});
