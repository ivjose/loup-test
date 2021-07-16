import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },

  cardTitle: {
    textDecoration: 'none',
  },
}))

const RecipeDisplay = ({ title, imageUrl }) => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        data-testid="img-placeholder"
        image={imageUrl}
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  )
}

RecipeDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
}

export default RecipeDisplay
