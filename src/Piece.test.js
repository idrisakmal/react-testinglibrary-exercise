import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store";
import StripSequencing from "./Piece";

test("foreground image fits within the container", () => {
  render(
    <Provider store={store}>
      <StripSequencing />
    </Provider>
  );

  const container = screen.getByRole("presentation");
  const image = screen.getByRole("img");

  // Check if the image dimensions are less than or equal to container dimensions
  expect(image.clientWidth).toBeLessThanOrEqual(container.clientWidth);
  expect(image.clientHeight).toBeLessThanOrEqual(container.clientHeight);
});
