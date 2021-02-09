import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './themes'
import { Alert } from '../'
import { ColorName } from '../types'

const meta: Meta = {
  title: 'Example/Alert',
  component: Alert,
  // argTypes: {
  //   children: {
  //     control: {
  //       type: 'text',
  //     },
  //   },
  // },
  // parameters: {
  //   controls: { expanded: true },
  // },
}

export default meta

interface AlertStoryArgs {
  textAlign: string
  success: string
  info: string
  warning: string
  danger: string
}

const Template: Story<AlertStoryArgs> = (args) => {
  const theme = { ...defaultTheme }
  theme.colors = {
    ...theme.colors,
    success: args.success,
    info: args.info,
    warning: args.warning,
    danger: args.danger,
  }
  const alertTypes: ColorName[] = ['success', 'info', 'warning', 'danger']
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
