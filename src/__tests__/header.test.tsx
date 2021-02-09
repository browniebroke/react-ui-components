import React from 'react'
import { ThemeProvider } from 'styled-components'
import renderer from 'react-test-renderer'

import { Header, styledComponentsTheme } from '../'

describe('Header component', () => {
  test('should render correctly with children', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={styledComponentsTheme}>
          <Header>
            <div>This</div>
            <div>is</div>
            <div>cool</div>
          </Header>
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render correctly without children', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={styledComponentsTheme}>
          <Header />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
