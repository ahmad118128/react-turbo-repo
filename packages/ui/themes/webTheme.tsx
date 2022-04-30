import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { deepPurple, amber } from '@mui/material/colors'

// Create a theme instance.
const costumeTheme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: amber,
  },
})

const theme = responsiveFontSizes(costumeTheme)

export default theme
