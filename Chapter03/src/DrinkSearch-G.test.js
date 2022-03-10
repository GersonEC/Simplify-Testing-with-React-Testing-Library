import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import DrinkSearch from './DrinkSearch';
import { mockServer } from './mocks/server.js';

beforeAll(() => mockServer.listen());
afterEach(() => mockServer.resetHandlers());
afterAll(() => mockServer.close());

describe("DrinkSearchG", () => {
  test("renders mock drink data", async () => {
    render(<DrinkSearch />);
    const searchInput = screen.getByRole('searchbox');

    user.type(searchInput, 'vodka, {enter}');

    expect( 
      await screen.findByRole('img', {name: /test drink/i})
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {name: /test drink/i})
    ).toBeInTheDocument();
    expect(
      screen.getByText(/test ingredient/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/test instructions/i)
    ).toBeInTheDocument();
  })

  test('renders no drink results', async () => { });

  test('renders service unavailable', async () => { });


})