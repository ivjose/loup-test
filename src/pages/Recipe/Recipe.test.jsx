import { render, screen } from 'test-utils/testing-library-utils'
import { Route } from 'react-router-dom'
import Recipe from './Recipe'

describe('Recipe', () => {
  it('should render', async () => {
    render(
      <Route path="/recipes/:recipeId">
        <Recipe />
      </Route>,

      { route: '/recipes/5333' }
    )

    const loadingText = screen.getByRole('heading', { name: '...Loading' })
    expect(loadingText).toBeInTheDocument()

    const recipeTiles = await screen.findByRole('heading', { name: 'ANZAC Smoothie' })

    expect(recipeTiles).toBeInTheDocument()

    const imageDisplay = await screen.findByRole('img')
    expect(imageDisplay).toHaveAttribute(
      'src',
      'https://cdn.centr.com/content/6000/5333/images/landscapewidedesktop1x-loup-cen-anzacsmoothie-169l-v2.jpg'
    )

    const itemTags = await screen.findAllByTestId('chip-tags')
    expect(itemTags.length).toBe(14)
  })
})
