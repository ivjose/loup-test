import { render, screen } from '@testing-library/react'

import RecipeDisplay from './RecipeDisplay'

test('should render RecipeDisplay', () => {
  render(<RecipeDisplay title="Recipe title" imageUrl="/sample-url-same.jpg" />)

  const textDisplay = screen.getByText('Recipe title')
  expect(textDisplay).toBeInTheDocument()

  const imageDisplay = screen.getByTestId('img-placeholder')
  expect(imageDisplay).toHaveStyle('background-image: url(/sample-url-same.jpg);')
})
