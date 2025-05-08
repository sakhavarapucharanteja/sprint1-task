import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

test("NavBar Renders", () => {
  render(<NavBar />);
  const button = screen.getByRole("button");
  const logo = screen.getByText("Weather");
  expect(button).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
  expect(button).toMatchSnapshot();
});
