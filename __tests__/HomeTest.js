import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from '../pages/index'

test("Check for Getting Started Text", () => {
  const wrapper = render(<Home />);
  expect(wrapper).toBeInTheDocument();
});