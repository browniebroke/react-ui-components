import React from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './themes'
import ContentWrapper from '../content-wrapper'

export default {
  title: 'Example/ContentWrapper',
  component: ContentWrapper,
}

const Template = (args) => (
  <ThemeProvider theme={defaultTheme}>
    <div
      style={{
        backgroundColor: defaultTheme.colors.primary,
        color: defaultTheme.colors.secondary,
        height: args.headerHeight,
      }}
    >
      Before
    </div>
    <ContentWrapper
      headerHeight={args.headerHeight}
      footerHeight={args.footerHeight}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis.
        Quisque convallis libero in sapien pharetra tincidunt. Aliquam elit
        ante, malesuada id, tempor eu, gravida id, odio. Maecenas suscipit,
        risus et eleifend imperdiet, nisi orci ullamcorper massa, et adipiscing
        orci velit quis magna. Praesent sit amet ligula id orci venenatis
        auctor. Phasellus porttitor, metus non tincidunt dapibus, orci pede
        pretium neque, sit amet adipiscing ipsum lectus et libero. Aenean
        bibendum. Curabitur mattis quam id urna. Vivamus dui. Donec nonummy
        lacinia lorem. Cras risus arcu, sodales ac, ultrices ac, mollis quis,
        justo. Sed a libero. Quisque risus erat, posuere at, tristique non,
        lacinia quis, eros.
      </p>
    </ContentWrapper>
    <div
      style={{
        backgroundColor: defaultTheme.colors.primary,
        color: defaultTheme.colors.secondary,
        height: args.footerHeight,
      }}
    >
      After
    </div>
  </ThemeProvider>
)

export const WithDefaultValues = Template.bind({})
export const WithValues = Template.bind({})
WithValues.args = {
  headerHeight: '50px',
  footerHeight: '40px',
}
