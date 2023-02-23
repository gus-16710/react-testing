import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "../";

describe("FORM Component 👾", () => {
  test("✅ Render initial elements on the screen", () => {
    render(<Form />);
    const headerElement = screen.getByRole("heading");

    const titleInputElement = screen.getByPlaceholderText(/title/i);
    const textInputElement = screen.getByPlaceholderText(/text/i);
    const selectInputElement = screen.getByRole("combobox");
    const buttonElement = screen.getByRole("button", { name: /create task/i });

    expect(headerElement).toHaveTextContent(/create a new task/i);
    expect(titleInputElement).toBeInTheDocument();
    expect(textInputElement).toBeInTheDocument();
    expect(selectInputElement).toHaveDisplayValue(/select a category/i);
    expect(buttonElement).toBeDisabled();
  });

  test("✅ Disable submit button after fill form component", () => {
    render(<Form />);

    const titleInputElement = screen.getByPlaceholderText(/title/i);
    const textInputElement = screen.getByPlaceholderText(/text/i);
    const selectInputElement = screen.getByRole("combobox");
    const buttonElement = screen.getByRole("button", { name: /create task/i });

    userEvent.type(titleInputElement, "Example title");
    userEvent.type(textInputElement, "Example text");
    userEvent.selectOptions(selectInputElement, "house");

    expect(titleInputElement).toHaveValue("Example title");
    expect(textInputElement).toHaveValue("Example text");
    expect(selectInputElement).toHaveValue("house");
    expect(buttonElement).toBeEnabled();
  });

//   test("✅ Click on submit button and clear the form", async () => {
//     render(<Form addTask={jest.fn()} />);

//     const titleInputElement = screen.getByPlaceholderText(/title/i);
//     const textInputElement = screen.getByPlaceholderText(/text/i);
//     const selectInputElement = screen.getByRole("combobox");
//     const buttonElement = screen.getByRole("button", { name: /create task/i });

//     userEvent.type(titleInputElement, "Example title");
//     userEvent.type(textInputElement, "Example text");
//     userEvent.selectOptions(selectInputElement, "house");

//     expect(buttonElement).toBeEnabled();

//     userEvent.click(buttonElement);

//     await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

//     expect(titleInputElement).toHaveValue("");
//     expect(textInputElement).toHaveValue("");
//     expect(selectInputElement).toHaveValue("");

//     expect(buttonElement).toBeDisabled();
//   });

  test("✅ Click on submit button and clear the form", async () => {
    render(<Form addTask={jest.fn()} />);

    userEvent.type(screen.getByPlaceholderText(/title/i), "Example title");
    userEvent.type(screen.getByPlaceholderText(/text/i), "Example text");
    userEvent.selectOptions(screen.getByRole("combobox"), "house");

    expect(screen.getByRole("button", { name: /create task/i })).toBeEnabled();

    userEvent.click(screen.getByRole("button", { name: /create task/i }));

    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));    

    expect(screen.getByPlaceholderText(/title/i)).toHaveValue("");
    expect(screen.getByPlaceholderText(/text/i)).toHaveValue("");
    expect(screen.getByRole("combobox")).toHaveValue("");

    expect(screen.getByRole("button", { name: /create task/i })).toBeDisabled();
  });
});
