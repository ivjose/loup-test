/* eslint-disable jsx-a11y/anchor-is-valid */

import PropTypes from 'prop-types'
import styled from 'styled-components'
import MAppBar from '@material-ui/core/AppBar'
import MToolbar from '@material-ui/core/Toolbar'
import MTypography from '@material-ui/core/Typography'

import { theme } from 'theme'

const AppBar = styled(MAppBar)`
  border-bottom: 1px solid ${theme.palette.divider};
  margin-bottom: ${theme.spacing(5)}px;
`

const Toolbar = styled(MToolbar)`
  flex-wrap: wrap;
`

const Typography = styled(MTypography)`
  flex-grow: 1;
`

const Layout = ({ children }) => (
  <>
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Frontend Coding Exercise
        </Typography>
      </Toolbar>
    </AppBar>

    {children}
  </>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
