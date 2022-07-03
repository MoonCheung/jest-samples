import React from "react";
import { render } from "@testing-library/react";
import Title from "components/Title";

describe("Title", () => {
  it("可以正确渲染大字", () => {
    const { getByText } = render(<Title type="large" title="大字" />);
    const content = getByText('大字');
    expect(content).toMatchSnapshot();
  });

  it("可以正确渲染小字", () => {
    const { getByText } = render(<Title type="small" title="小字" />);
    const content = getByText('小字');
    expect(content).toMatchSnapshot();
  });
});