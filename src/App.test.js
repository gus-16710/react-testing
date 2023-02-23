import { render, screen } from "@testing-library/react";
import App from "./App";

describe("APP component", () => {
  test("✅ Should render app header", () => {
    render(<App />);
    
    expect(
      screen.getByRole("heading", { name: /react testing library/i })
    ).toBeInTheDocument();
  });
});
