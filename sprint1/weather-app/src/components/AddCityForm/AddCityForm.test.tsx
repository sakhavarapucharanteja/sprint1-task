import { render, screen } from "@testing-library/react";
import AddCityForm from "./AddCityForm";

test("AddCityForm Renders", () => {
  render(
    <AddCityForm
      handleAddCity={(cityName: string): void => {
        throw new Error(cityName);
      }}
    />
  );
  const input = screen.getByLabelText("City");
  expect(input).toBeInTheDocument();
  expect(input).toMatchSnapshot();
});
