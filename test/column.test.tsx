import React from 'react'
import renderer from 'react-test-renderer'

import { Col, styledComponentsTheme } from '../src'
import { ThemeProvider } from 'styled-components'

describe('Column component', () => {
  test('should render correctly without props', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={styledComponentsTheme}>
          <Col />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render correctly with some props', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={styledComponentsTheme}>
          <Col xsWidth="50%" smWidth="33%" mdWidth="25%" lgWidth="20%" />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render correctly with textAlign', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={styledComponentsTheme}>
          <Col textAlign="center" />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render correctly with alignSelf', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={styledComponentsTheme}>
          <Col alignSelf="middle" />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render correctly with max width', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={styledComponentsTheme}>
          <Col
            MaxWidth={'100%'}
            xsMaxWidth="80%"
            smMaxWidth={'70%'}
            mdMaxWidth={`${(2 * 100) / 3}%`}
            lgMaxWidth="50%"
            xlMaxWidth="40%"
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render correctly with order props', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={styledComponentsTheme}>
          <Col
            xsOrder={'2'}
            smOrder={'3'}
            mdOrder={0}
            lgOrder={4}
            xlOrder={'6'}
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render correctly with global padding props', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={styledComponentsTheme}>
          <Col sidePadding={1} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render correctly with each side padding props', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={styledComponentsTheme}>
          <Col
            topPadding={1}
            bottomPadding={2}
            rightPadding={3}
            leftPadding={4}
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render correctly with each direction padding props', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={styledComponentsTheme}>
          <Col xPadding={1} yPadding={2} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
