import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Counter from "../Counter";

describe("COUNTER component", () => {
  test("✅ Increments counter", () => {
    //Render the component on virtual dom
    render(<Counter />, { wrapper: BrowserRouter });

    //Select the elemens you want to interact with
    const counter = screen.getByTestId("counter");
    const increment = screen.getByTestId("increment");

    //Interact with those elements
    userEvent.click(increment);

    //assert the expected result
    expect(counter).toHaveTextContent("1");
  });
});
