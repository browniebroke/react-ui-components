import typography from './typography'

const theme = {
  colors: {
    primary: '#0d6efd',
    primaryDark: '#0b4fb1',
    secondary: '#e7e7e7',
    secondaryDark: '#c3c3c3',
  },
  gutterWidth: '15px',
  spacings: [
    typography.rhythm(1 / 6),
    typography.rhythm(1 / 3),
    typography.rhythm(2 / 3),
    typography.rhythm(1),
    typography.rhythm(2),
  ],
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
