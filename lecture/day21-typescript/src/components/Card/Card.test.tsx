import { render, screen } from '@testing-library/react';
import Card from './Card';

describe("Card", () => {
  test("should render given the props", () => {

    // const wrapper = render(<Card title="Title" body="Card body in test file"/>);
    // const title = wrapper.getByText("Title")

    const { getByText } = render(<Card title="Title" body="Card body in test file"/>);
    const title = getByText("Title");
    expect(title).toBeInTheDocument();
    // expect(screen.queryByText("someting")).not.toBeInTheDocument();
    // expect(screen.getByText("someting")).toBeInTheDocument();

    expect(1+1).toBe(2);
  })
})