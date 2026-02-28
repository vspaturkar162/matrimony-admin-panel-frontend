import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders application root", () => {
  render(<App />);
  const appElement = screen.getByText(/admin/i);
  expect(appElement).toBeInTheDocument();
});