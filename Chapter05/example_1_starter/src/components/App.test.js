import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, screen, within } from "@testing-library/react";

describe("Test Legacy application", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  function setOneDollarIncome() {
    user.click(screen.getByText(/set income/i));
    user.type(screen.getByRole("spinbutton"), "1");
    user.click(screen.getByText(/submit/i));
  }

  test("SetIncome, given income amount, sets income", () => {
    render(<App />);
    setOneDollarIncome();
    const leftOverBudget = screen.getByText(/left over:/i);
    const leftOverBudgetAmount = within(leftOverBudget).getByText(/\$1/i);
    expect(leftOverBudgetAmount).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /income: \$1/i })
    ).toBeInTheDocument();
  });
});
