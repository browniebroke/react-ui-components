import React from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme, redTheme } from './themes'
import Alert from '../alert'

export default {
  title: 'Example/Alert',
  component: Alert,
}

const Template = (args) => {
  const theme = { ...defaultTheme }
  theme.colors = {
    ...theme.colors,
    success: args.success,
    info: args.info,
    warning: args.warning,
    danger: args.danger,
  }
  const alertTypes = ['success', 'info', 'warning', 'danger']
  return (
    <ThemeProvider theme={theme}>
      {alertTypes.map((alertType) => (
        <div style={{ margin: '1rem 0' }}>
          <Alert alertType={alertType} textAlign={args.textAlign}>
            This an alert of level {alertType}
          </Alert>
        </div>
      ))}
    </ThemeProvider>
  )
}

export const DefaultTheme = Template.bind({})
DefaultTheme.args = {
  textAlign: 'left',
  success: '#28a745',
  info: '#17a2b8',
  warning: '#ffc107',
  danger: '#dc3545',
}

export const CustomTheme = Template.bind({})
CustomTheme.args = {
  textAlign: 'center',
  success: '#379f11',
  info: '#2949b7',
  warning: '#efd03a',
  danger: '#d25106',
}
