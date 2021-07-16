/* eslint-disable import/prefer-default-export */
import { rest } from 'msw'

import { recipe, recipes } from 'test-utils/data'

export const handlers = [
  rest.get('http://localhost:3030/recipes', (req, res, ctx) => res(ctx.json([...recipes]))),

  rest.get('http://localhost:3030/recipes/:id', (req, res, ctx) => res(ctx.json({ ...recipe }))),
]
