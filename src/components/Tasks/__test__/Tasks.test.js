import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tasks } from "../";

describe("TASKS Component 👾", () => {
  test("✅ Render 3 items on the list of tasks", async () => {
    render(<Tasks />);

    const loadingElement = screen.getByText(/loading/i);
    expect(loadingElement).toBeVisible();

    const listElements = await screen.findAllByRole("listitem");
    expect(loadingElement).not.toBeVisible();
    expect(listElements).toHaveLength(3);
  });

  test("✅ Render 3 items on the list of tasks (2)", async () => {
    render(<Tasks />);

    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

    const listElements = screen.getAllByRole("listitem");    
    expect(listElements).toHaveLength(3);
  });

  test("✅ Add a new task on the list", async () => {
    render(<Tasks/>);

    userEvent.type(screen.getByPlaceholderText(/title/i), "Example title");
    userEvent.type(screen.getByPlaceholderText(/text/i), "Example text");
    userEvent.selectOptions(screen.getByRole("combobox"), "house");

    userEvent.click(screen.getByRole("button", { name: /create task/i }));

    await waitForElementToBeRemoved(() => screen.getByTestId("form-loading"));

    expect(screen.getAllByRole("listitem")).toHaveLength(1);
  })
});
