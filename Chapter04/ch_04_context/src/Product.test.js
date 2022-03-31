import { render, screen } from '@testing-library/react'
import faker from 'faker'
import fakeProducts from './mocks/fakeProducts'
import Product from './Product'
import { RetailProvider } from './RetailContext'

test('Product, given product properties, renders to screen', () => {
  const mockProduct = {
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.fashion(),
    id: faker.random.uuid()
  }

  render(
    <RetailProvider products={[]}>
      <Product
        title={mockProduct.title}
        price={mockProduct.price}
        image={mockProduct.image}
      />
    </RetailProvider>
  )

  const title = screen.getByText(mockProduct.title)
  const price = screen.getByText(`$${mockProduct.price}`)
  const img = screen.getByRole('img')

  expect(title).toBeInTheDocument()
  expect(price).toBeInTheDocument()
  expect(img).toBeInTheDocument()
})
