import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import { ContentWrapper, styledComponentsTheme } from '../src'

describe('ContentWrapper component', () => {
  test('should render correctly without props', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={styledComponentsTheme}>
          <ContentWrapper />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render correctly with props', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={styledComponentsTheme}>
          <ContentWrapper headerHeight="50px" footerHeight="200px" />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
