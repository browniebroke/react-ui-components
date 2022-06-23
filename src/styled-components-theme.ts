import { Theme } from './types'

const styledComponentsTheme: Theme = {
  colors: {
    primary: '#0d6efd',
    secondary: '#6c757d',
    success: '#28a745',
    info: '#17a2b8',
    warning: '#ffc107',
    danger: '#dc3545',
    navbar: '#0d6efd',
    navbarText: '#ffffff',
  },
  gutterWidth: '15px',
  spacings: ['0.25rem', '0.5rem', '1rem', '1.5rem', '3rem'],
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

export default styledComponentsTheme
