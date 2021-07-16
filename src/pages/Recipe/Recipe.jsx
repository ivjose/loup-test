import { useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import MPaper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import MChip from '@material-ui/core/Chip'

import { useSelector, useDispatch } from 'react-redux'

import { theme } from 'theme'
import Layout from 'components/Layout'
import { fetchRecipeById } from 'actions/actionsRecipesById'

const Paper = styled(MPaper)`
  padding: ${theme.spacing(2)}px;
`
const Chip = styled(MChip)`
  padding: ${theme.spacing(0.5)}px;
`

const Recipe = () => {
  const { recipeId } = useParams()

  const recipe = useSelector((state) => state.recipe)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRecipeById(recipeId))
  }, [dispatch, recipeId])

  const isLoading = recipe.status === 'loading' || recipe.recipe === 'idle'

  return (
    <Layout>
      <Container maxWidth="md" component="main">
        {isLoading ? (
          <h1>...Loading</h1>
        ) : (
          <Paper>
            <img
              style={{ width: '100%' }}
              alt="{post.imageText}"
              src={recipe?.data?.imageList?.landscapewidedesktop1x.url}
              data-testid="image-display"
            />
            <Typography align="center" component="h1" variant="h3" color="inherit" gutterBottom>
              {recipe?.data?.title}
            </Typography>
            <Box>
              {recipe?.data?.tags.map((tag) => (
                <Chip key={tag.id} label={tag.name} data-testid="chip-tags" />
              ))}
            </Box>
          </Paper>
        )}
      </Container>
    </Layout>
  )
}

export default Recipe
