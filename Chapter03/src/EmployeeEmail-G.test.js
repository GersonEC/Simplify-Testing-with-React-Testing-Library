import {render, screen} from '@testing-library/react';
import EmployeeEmail from './EmployeeEmail';
import user from '@testing-library/user-event';

describe("EmployeeEmail-G", () => {
  test("It accepts a username and displays to the screen", () => {
    render(<EmployeeEmail />);
    const input = screen.getByRole('textbox', {name: /enter your name/i});

    user.type(input, "gerson enriquez");

    expect(screen.getByText(/gerson.enriquez@software-plus.com/i)).toBeInTheDocument()
  })
})