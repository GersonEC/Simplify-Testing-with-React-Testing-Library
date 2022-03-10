import {render, screen} from '@testing-library/react';
import user from '@testing-library/user-event'
import Vote from './Vote';

describe("Vote-G", () => {
  test('increases total likes by one and change to green background color', () => {
    render(<Vote totalGlobalLikes={10} />)
    const thumbsUpButton = screen.getByRole('button', {name: 'thumbs up'});

    user.click(thumbsUpButton);

    expect(screen.getByText(/11/i)).toBeInTheDocument();
    expect(thumbsUpButton).toHaveStyle({
      background: 'green'
    })
  })

  test('decrease total likes by one and change to red background color', () => {
    render(<Vote totalGlobalLikes={10} />)
    const thumbsDownBtn = screen.getByRole('button', {name: 'thumbs down'});
    
    user.click(thumbsDownBtn);

    expect(screen.getByText(/9/i)).toBeInTheDocument();
    expect(thumbsDownBtn).toHaveStyle({
      background: 'red'
    })
  })

  test("A user can only vote once", () => {
    render(<Vote totalGlobalLikes={10} />)
    const thumbsDownBtn = screen.getByRole('button', {name: 'thumbs down'});
    const thumbsUpBtn = screen.getByRole('button', {name: 'thumbs up'});

    user.click(thumbsUpBtn);

    expect(thumbsUpBtn).toBeDisabled();
    expect(thumbsDownBtn).toBeDisabled();
  })
});
