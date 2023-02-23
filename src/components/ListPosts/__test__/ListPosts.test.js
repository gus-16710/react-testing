import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { rest } from "msw";
import { BrowserRouter } from "react-router-dom";
import { ListPosts } from "..";
import { server } from "../../../mocks/server";

describe("LIST component", () => {
  test("✅ Display list of fetched items", async () => {
    render(<ListPosts />, { wrapper: BrowserRouter });

    //Showing loading component
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    //Asert listing all the items fetched
    expect(await screen.findAllByRole("listitem")).toHaveLength(2);

    //Assert that the corretc posts have loaded
    expect(screen.getByText(/sunt aut facere repellat/i)).toBeVisible();
    expect(screen.getByText(/qui est esse/i)).toBeVisible();

    //Hiding loading component
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  });

  test("✅ Display error message if fetching fails", async () => {    
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/posts",
        (req, res, ctx) => {
          return res(ctx.status(404));
        }
      )
    );

    render(<ListPosts />, { wrapper: BrowserRouter });

    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
});
