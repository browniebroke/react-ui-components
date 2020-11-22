import theme from '../theme'

export const defaultTheme = { ...theme }

export const redTheme = {
  ...theme,
  colors: {
    primary: '#b51b32',
    primaryDark: '#861426',
    secondary: '#e7e7e7',
    secondaryDark: '#c3c3c3',
  },
}
