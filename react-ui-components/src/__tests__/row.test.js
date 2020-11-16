import React from 'react'
import renderer from 'react-test-renderer'

import Row from '../row'
import styledComponentsTheme from '../styled-components-theme'
import { ThemeProvider } from 'styled-components'

describe('Row component', () => {
  test('should render correctly without props', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={styledComponentsTheme}>
          <Row />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render correctly with alignItems prop', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={styledComponentsTheme}>
          <Row alignItems="center" />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
