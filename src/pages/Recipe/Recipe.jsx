import { useEffect } from 'react'
// import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Chip from '@material-ui/core/Chip'

import { useSelector, useDispatch } from 'react-redux'

import Layout from 'components/Layout'
import { fetchRecipeById } from 'actions/actionsRecipesById'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}))

const Recipe = () => {
  const classes = useStyles()
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
          <Paper className={classes.paper}>
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
                <Chip
                  className={classes.chip}
                  key={tag.id}
                  label={tag.name}
                  data-testid="chip-tags"
                />
              ))}
            </Box>
          </Paper>
        )}
      </Container>
    </Layout>
  )
}

export default Recipe
