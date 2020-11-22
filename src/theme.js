import { rhythm } from './typography'

const theme = {
  colors: {
    primary: '#0d6efd',
    primaryDark: '#0b4fb1',
    secondary: '#6c757d',
    secondaryDark: '#495057',
  },
  gutterWidth: '15px',
  spacings: [rhythm(1 / 6), rhythm(1 / 3), rhythm(2 / 3), rhythm(1), rhythm(2)],
  gridBreakpoints: {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  // Note: all the keys in the below object should exist above
  containersMaxWidth: {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px',
  },
}

export default theme
