import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Button from "./Button"

describe("Button", () => {
  test("should fire event after click", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<Button onClick={handleClick}/>)

    const button = getByRole("button");
    userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);

    userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(2);
  })
})