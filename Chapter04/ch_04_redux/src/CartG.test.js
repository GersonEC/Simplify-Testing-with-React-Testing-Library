import { fakeStore, render, screen } from './utils/test-utilsG'
import { Provider } from 'react-redux'
import Cart from './Cart'

describe('Cart', () => {
  test.only('Cart, given initial render, displays empty cart', () => {
    render(<Cart />, { initialState: fakeStore })

    expect(screen.getByText(/0 items/i)).toBeInTheDocument()
    expect(screen.getByText(/\$0\.00/i)).toBeInTheDocument()
  })
})
