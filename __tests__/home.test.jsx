import Home from "@/app/page";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

describe("Home page", () => {
  beforeAll(() => {
    render(<Home />);
  });

  it("should increment the count", async () => {
    const decButton = screen.getByTestId(`dec-button`);
    const counter = screen.getByText("0");
    await user.click(decButton);
    expect(counter).toHaveTextContent("-1");
  });
});
