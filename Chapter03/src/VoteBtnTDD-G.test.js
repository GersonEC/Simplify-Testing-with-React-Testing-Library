import { render, screen } from '@testing-library/react'
import VoteBtnTDD from './VoteBtnTDD'
import stubThumbsUp from './images/thumbs-up.svg'
import user from '@testing-library/user-event'

describe('VoteBtn with TDD', () => {
  test('given image and vote status, renders button to screen', () => {
    const stubHandleVote = jest.fn()
    const stubAltText = 'vote like'
    render(
      <VoteBtnTDD
        handleVote={stubHandleVote}
        hasVoted={false}
        imgSrc={stubThumbsUp}
        altText={stubAltText}
      />
    )
    const image = screen.getByRole('img', { name: stubAltText })
    const button = screen.getByRole('button', { name: stubAltText })

    expect(image).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(button).toBeEnabled()
  })

  test('given clicked button, invokes handleVote', () => {
    const mockHandleVote = jest.fn()
    render(
      <VoteBtnTDD
        handleVote={mockHandleVote}
        hasVoted={false}
        imgSrc={stubThumbsUp}
        altText="vote like"
      />
    )
    const button = screen.getByRole('button', { name: /vote like/i })
    user.click(button)

    expect(mockHandleVote).toHaveBeenCalled()
    expect(mockHandleVote).toHaveBeenCalledTimes(1)
  })
})
