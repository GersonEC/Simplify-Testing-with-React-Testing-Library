import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { RegisterG } from './RegisterG'

describe('Register', () => {
  test('it should render with Register here as a title', () => {
    render(<RegisterG />)
    const titleElement = screen.getByRole('heading', {
      name: /register here/i,
      exact: true
    })

    expect(titleElement).toBeInTheDocument()
  })

  test('it should contain an Email address input', () => {
    render(<RegisterG />)
    const emailInputElement = screen.getByRole('textbox', {
      name: /email address/i,
      exact: true
    })

    expect(emailInputElement).toBeInTheDocument()
  })

  test('it should contain a password input', () => {
    render(<RegisterG />)
    const passwordInputElement = screen.getByLabelText(/create password/i, {
      exact: true
    })

    expect(passwordInputElement).toBeInTheDocument()
  })

  test('it should contain a submit button', () => {
    render(<RegisterG />)
    const submitElement = screen.getByRole('button', {
      name: /submit/i,
      exact: true
    })

    expect(submitElement).toBeInTheDocument()
  })

  test('submit button should be disable when email or password are empty', () => {
    render(<RegisterG />)
    const submitElement = screen.getByRole('button', {
      name: /submit/i,
      exact: true
    })
    expect(submitElement).toBeDisabled()
  })

  test('when insert email and password, it could be possible to click on submit button and call a callback', () => {
    const mockFn = jest.fn()
    render(<RegisterG onSubmit={mockFn} />)
    const emailInputElement = screen.getByRole('textbox', {
      name: /email address/i,
      exact: true
    })
    const passwordInputElement = screen.getByLabelText(/create password/i, {
      exact: true
    })
    const submitElement = screen.getByRole('button', {
      name: /submit/i,
      exact: true
    })
    expect(submitElement).toBeDisabled()

    user.type(emailInputElement, 'gerson@mail.it')
    user.type(passwordInputElement, 'password')

    expect(submitElement).toBeEnabled()

    user.click(submitElement)

    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith({
      email: 'gerson@mail.it',
      password: 'password'
    })
  })

  //TODO: Testare l'accessibilità -> vedere JESTDOM GITHUB
})
