import { render, screen } from '@testing-library/react'

import Layout from './Layout'

test('should render Layout', () => {
  render(
    <Layout>
      <h1>Page Title</h1>
    </Layout>
  )

  const textDisplay = screen.getByText('Page Title')
  expect(textDisplay).toBeInTheDocument()
})
