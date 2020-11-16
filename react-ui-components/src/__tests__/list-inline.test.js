// external-link.test.js
import React from 'react'
import { ThemeProvider } from 'styled-components'
import renderer from 'react-test-renderer'

import ListInline from '../list-inline'
import theme from '../theme'

describe('ListInline component', () => {
  test('should render correctly with children', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <ListInline>
            <div>This</div>
            <div>is</div>
            <div>an</div>
            <div>example</div>
          </ListInline>
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render correctly without children', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <ListInline />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render with custom padding', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <ListInline padding={0}>
            <div>This</div>
            <div>is</div>
            <div>fun</div>
          </ListInline>
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
