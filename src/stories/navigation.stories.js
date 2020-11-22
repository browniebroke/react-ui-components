import React from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './themes'
import Navigation from '../navigation'

export default {
  title: 'Example/Navigation',
  component: Navigation,
}

const Template = (args) => (
  <ThemeProvider theme={defaultTheme}>
    <Navigation direction={args.direction}>
      <a href="#">One</a>
      <a href="#">Two</a>
      <a href="#">Three</a>
    </Navigation>
  </ThemeProvider>
)

export const NoDirection = Template.bind({})

export const ColumnReverseDirection = Template.bind({})
ColumnReverseDirection.args = {
  direction: 'column-reverse',
}

export const RowDirection = Template.bind({})
RowDirection.args = {
  direction: 'row',
}

export const RowReverseDirection = Template.bind({})
RowReverseDirection.args = {
  direction: 'row-reverse',
}
