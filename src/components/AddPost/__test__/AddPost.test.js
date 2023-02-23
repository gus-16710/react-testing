import { render, screen } from "@testing-library/react";
import { AddPost } from "..";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => render(<AddPost />, { wrapper: BrowserRouter }));

describe("ADDPOST component", () => {
  test("✅ Not display success label", () => {
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  test("✅ Type into title text input element", () => {
    userEvent.type(screen.getByPlaceholderText("Title"), "Testing title");
    expect(screen.getByPlaceholderText("Title").value).toBe("Testing title");
  });

  test("✅ Type into body text input element", () => {
    userEvent.type(screen.getByPlaceholderText("Body"), "Testing body");
    expect(screen.getByPlaceholderText("Body").value).toBe("Testing body");
  });

  test("✅ Fill form & click on submit button element", async () => {
    userEvent.type(screen.getByPlaceholderText("Title"), "Testing title");
    userEvent.type(screen.getByPlaceholderText("Body"), "Testing body");

    userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(
      await screen.findByText(/Occaecati excepturi optio reprehenderit/i)
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Title").value).toBe("");
    expect(screen.getByPlaceholderText("Body").value).toBe("");
  });
});
