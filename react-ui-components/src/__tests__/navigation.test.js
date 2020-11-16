import React from 'react'
import renderer from 'react-test-renderer'

import Navigation from '../navigation'
import styledComponentsTheme from '../styled-components-theme'
import { ThemeProvider } from 'styled-components'

describe('Navigation component', () => {
  test('should render correctly without props', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={styledComponentsTheme}>
          <Navigation />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render correctly with direction prop', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={styledComponentsTheme}>
          <Navigation direction="row" />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
