import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("the application", () => {
  it("renders without error", () => {
    render(<App />);
  });
});
