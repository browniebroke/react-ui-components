import React from 'react'
import { Story } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { Header, Navigation } from '../src/'
import { ThemeProps } from '../src/types'
import { defaultTheme, redTheme } from './themes'

export default {
  title: 'Example/Header',
  component: Header,
}

const Template: Story<ThemeProps> = (args) => (
  <ThemeProvider theme={args.theme}>
    <Header>
      <h2>Site title</h2>
      <Navigation direction="row">
        <a href="#">Link one</a>
        <a href="#">Link two</a>
      </Navigation>
    </Header>
  </ThemeProvider>
)

export const BlueTheme = Template.bind({})
BlueTheme.args = {
  theme: defaultTheme,
}

export const RedTheme = Template.bind({})
RedTheme.args = {
  theme: redTheme,
}
