import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import VoteBtn from './VoteBtn';
import thumbsUp from './images/thumbs-up.svg';

describe("VoteBtn-G", () => {
  test("invokes handleVote", () => {
    const mockHandleVote = jest.fn()
    render(
      <VoteBtn
        handleVote={mockHandleVote}
        hasVoted={false}
        imgSrc={thumbsUp}
        altText="vote like"
      />
    );
    const likeButton = screen.getByRole('button', {name: /vote like/i})
    
    user.click(likeButton);

    expect(mockHandleVote).toHaveBeenCalled();
    expect(mockHandleVote).toHaveBeenCalledTimes(1);
  })
})