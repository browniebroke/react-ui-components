import { styledComponentsTheme } from '../src'

export const defaultTheme = { ...styledComponentsTheme }

export const redTheme = {
  ...styledComponentsTheme,
  colors: {
    ...styledComponentsTheme.colors,
    navbar: '#b51b32',
    navbarText: '#ffffff',
  },
}
