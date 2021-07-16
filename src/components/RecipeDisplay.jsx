import PropTypes from 'prop-types'
import styled from 'styled-components'
import MCard from '@material-ui/core/Card'
import MCardContent from '@material-ui/core/CardContent'
import MCardMedia from '@material-ui/core/CardMedia'
import MTypography from '@material-ui/core/Typography'

const Card = styled(MCard)`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const CardMedia = styled(MCardMedia)`
  padding-top: 56.25%;
`

const CardContent = styled(MCardContent)`
  flex-grow: 1;
`

const Typography = styled(MTypography)`
  text-decoration: none;
`

const RecipeDisplay = ({ title, imageUrl }) => (
  <Card>
    <CardMedia data-testid="img-placeholder" image={imageUrl} title="Image title" />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {title}
      </Typography>
    </CardContent>
  </Card>
)

RecipeDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
}

export default RecipeDisplay
