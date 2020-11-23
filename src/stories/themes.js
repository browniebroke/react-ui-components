import styledComponentsTheme from '../styled-components-theme'

export const defaultTheme = { ...styledComponentsTheme }

export const redTheme = {
  ...styledComponentsTheme,
  colors: {
    primary: '#b51b32',
    secondary: '#e7e7e7',
  },
}
