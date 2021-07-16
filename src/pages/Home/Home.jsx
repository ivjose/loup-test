import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import { useSelector, useDispatch } from 'react-redux'

import { fetchRecipes } from 'actions/actionsRecipes'
import RecipeDisplay from 'components/RecipeDisplay'
import Layout from 'components/Layout'
import PreLoadImage from 'components/PreLoadImage'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Home = () => {
  const recipes = useSelector((state) => state.recipes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRecipes())
  }, [dispatch])

  const isLoading = recipes.status === 'loading' || recipes.status === 'idle'

  return (
    <Layout>
      <>
        <Title>Recipes List</Title>

        <Container maxWidth="md" component="main">
          <Grid container spacing={4}>
            {isLoading
              ? Array.from(Array(6).keys()).map((item) => (
                  <Grid key={item} item xs={12} sm={6} md={4}>
                    <PreLoadImage />
                  </Grid>
                ))
              : recipes.data?.map((recipe) => (
                  <Grid key={recipe.contentId} item xs={12} sm={6} md={4}>
                    <Link to={`/recipes/${recipe.contentId}`}>
                      <RecipeDisplay
                        title={recipe.title}
                        imageUrl={recipe.imageList.landscapemobile1x.url}
                      />
                    </Link>
                  </Grid>
                ))}
          </Grid>
        </Container>
      </>
    </Layout>
  )
}
export default Home
