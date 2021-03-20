import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import { Row, styledComponentsTheme } from '../src'

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
          <Row alignItem="center" />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render correctly with margin all sides prop', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={styledComponentsTheme}>
          <Row sideMargin={1} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render correctly with margin each axis prop', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={styledComponentsTheme}>
          <Row xMargin={1} yMargin={2} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render correctly with margin each sides props', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={styledComponentsTheme}>
          <Row topMargin={1} bottomMargin={2} rightMargin={3} leftMargin={4} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
