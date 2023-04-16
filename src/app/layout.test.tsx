//test layout.tsx rendering
import React from "react";
import { render } from "@testing-library/react";
import Page from "./page";

describe("Layout", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Page />);
    expect(baseElement).toBeTruthy();
  });
});
