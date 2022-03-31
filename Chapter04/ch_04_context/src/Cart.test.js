import { render, screen } from '@testing-library/react'
import Cart from './Cart'
import { RetailProvider } from './RetailContext'

test('Cart, given initial render, returns empty cart', () => {
  render(
    <RetailProvider products={[]}>
      <Cart />
    </RetailProvider>
  )

  const itemsQuantity = screen.getByText(/0 items/i)
  const subTotal = screen.getByText(/\$0\.00/i)

  expect(itemsQuantity).toBeInTheDocument()
  expect(subTotal).toBeInTheDocument()
})
