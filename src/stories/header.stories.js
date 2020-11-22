import React from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme, redTheme } from './themes'
import Header from '../header'

export default {
  title: 'Example/Header',
  component: Header,
}

const Template = (args) => (
  <ThemeProvider theme={args.theme}>
    <Header>
      <h2>The title</h2>
      <div>
        <a href="#">Link one</a>
        <a href="#">Link two</a>
      </div>
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
