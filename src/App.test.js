import { render, screen } from 'test-utils/testing-library-utils'
import App from './App'

test('renders title page', () => {
  render(<App />)

  const linkElement = screen.getByText(/recipes list/i)
  expect(linkElement).toBeInTheDocument()
})
