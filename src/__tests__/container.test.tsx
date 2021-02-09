import React from 'react'
import renderer from 'react-test-renderer'

import { Container, styledComponentsTheme } from '../'
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
