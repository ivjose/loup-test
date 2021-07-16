/* eslint-disable import/prefer-default-export */
import { createTheme } from '@material-ui/core/styles'

export const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
      },
    },
  },
})
