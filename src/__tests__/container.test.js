import React from 'react'
import renderer from 'react-test-renderer'

import Container from '../container'
import styledComponentsTheme from '../styled-components-theme'
import { ThemeProvider } from 'styled-components'

describe('Container component', () => {
  test('should render correctly', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={styledComponentsTheme}>
          <Container />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
