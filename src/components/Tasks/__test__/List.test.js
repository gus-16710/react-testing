import { render, screen } from "@testing-library/react";
import { List } from "..";

const tasks = [
  { id: 1, title: "Title one", text: "Text one", category: "job" },
  { id: 2, title: "Title two", text: "Text two", category: "house" },
];

beforeEach(() => render(<List tasks={[]} />));

describe("LIST Component 👾", () => {
  test("✅ Render the main header", () => {
    const headerElement = screen.getByRole("heading", {
      name: /list of tasks/i,
    });

    expect(headerElement).toBeInTheDocument();
  });

  test("✅ Render an empty list of elements", () => {
    const listElements = screen.queryAllByRole("listitem");
    expect(listElements).toHaveLength(0);
  });

  test("✅ Render multiple elements on the list", () => {
    render(<List tasks={tasks}/>);
    const listElements = screen.queryAllByRole("listitem");
    expect(listElements).toHaveLength(2);
  });
});
