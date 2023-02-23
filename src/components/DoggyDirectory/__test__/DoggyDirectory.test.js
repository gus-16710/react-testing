import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import DoggyDirectory from "../DoggyDirectory";

beforeEach(() => render(<DoggyDirectory />, { wrapper: BrowserRouter }));

describe("DOOGYDIRECTORY Component", () => {
  test("✅ Renders the landing page", async () => {
    expect(screen.getByRole("heading")).toHaveTextContent(/doggy directory/i);
    expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");

    expect(
      await screen.findByRole("option", { name: "husky" })
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("✅ Should be able to search and display dog image results", async () => {
    //Simulate selecting an option and verifying its value
    expect(
      await screen.findByRole("option", { name: "cattledog" })
    ).toBeInTheDocument();

    userEvent.selectOptions(screen.getByRole("combobox"), "cattledog");
    expect(screen.getByRole("combobox")).toHaveValue("cattledog");
  });

  test("✅ Should be able to search and display dog image results", async () => {
    //Simulate selecting an option and verifying its value
    const select = screen.getByRole("combobox");
    expect(
      await screen.findByRole("option", { name: "cattledog" })
    ).toBeInTheDocument();
    userEvent.selectOptions(select, "cattledog");
    expect(select).toHaveValue("cattledog");

    //Initiate the searh request
    const searchBtn = screen.getByRole("button", { name: "Search" });
    expect(searchBtn).not.toBeDisabled();
    userEvent.click(searchBtn);

   //expect(screen.getByText(/loading/i)).toBeInTheDocument();
    
    // //Loading state displays and gets remove once results are displayed
    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

    //Verify image display and result count
    const dogImages = screen.getAllByRole("img");
    expect(dogImages).toHaveLength(2);
    expect(screen.getByText(/2 results/i)).toBeInTheDocument();
    expect(dogImages[0]).toHaveAccessibleName("cattledog 1 of 2");
    expect(dogImages[1]).toHaveAccessibleName("cattledog 2 of 2");
  });
});
