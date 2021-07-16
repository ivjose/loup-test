import Skeleton from '@material-ui/lab/Skeleton'
import Box from '@material-ui/core/Box'

const PreLoadImage = () => (
  <Box my={3} data-testid="loading-container">
    <Skeleton variant="rect" height={150} />
    <Box pt={1}>
      <Skeleton width="60%" height={30} />
    </Box>
  </Box>
)

export default PreLoadImage
