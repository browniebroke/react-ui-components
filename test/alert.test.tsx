import React from 'react'
import { ThemeProvider } from 'styled-components'
import renderer from 'react-test-renderer'

import { Alert, styledComponentsTheme } from '../src'
import { ColorName } from '../src/types'

describe('Alert component', () => {
  const alertTypes: ColorName[] = ['success', 'info', 'warning', 'danger']
  alertTypes.forEach((alertType) =>
    test(`should render correctly with ${alertType}`, () => {
      let tree = renderer
        .create(
          <ThemeProvider theme={styledComponentsTheme}>
            <Alert alertType={alertType}>This is a {alertType} alert</Alert>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  )

  const alignments = ['', 'left', 'center', 'right']
  alignments.forEach((textAlign) =>
    test(`should render correctly with ${textAlign}`, () => {
      let tree = renderer
        .create(
          <ThemeProvider theme={styledComponentsTheme}>
            <Alert alertType="info" textAlign={textAlign}>
              {textAlign} alert
            </Alert>
          </ThemeProvider>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  )
})
