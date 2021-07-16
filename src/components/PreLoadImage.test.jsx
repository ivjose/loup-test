import { render, screen } from '@testing-library/react'

import PreLoadImage from './PreLoadImage'

test('should render PreLoadImage', () => {
  render(<PreLoadImage />)

  const loadingDisplay = screen.getByTestId('loading-container')
  expect(loadingDisplay).toBeInTheDocument()
})
