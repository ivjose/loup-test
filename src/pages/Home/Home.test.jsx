import { render, screen } from 'test-utils/testing-library-utils'

// import { MemoryRouter } from 'react-router-dom'

import Home from './Home'

describe('Home', () => {
  it('should render', async () => {
    render(<Home />)

    const loadingDisplays = screen.getAllByTestId('loading-container')
    expect(loadingDisplays.length).toBe(6)

    const recipeTiles = await screen.findAllByRole('heading', { level: 2 })

    expect(recipeTiles.length).toBe(6)
  })
})
