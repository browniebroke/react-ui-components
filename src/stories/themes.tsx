import styledComponentsTheme from '../styled-components-theme'

export const defaultTheme = { ...styledComponentsTheme }

export const redTheme = {
  ...styledComponentsTheme,
  colors: {
    ...styledComponentsTheme.colors,
    navbar: '#b51b32',
    navbarText: '#ffffff',
  },
}
