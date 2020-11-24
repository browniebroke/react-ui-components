import React from 'react'
import { ThemeProvider } from 'styled-components'
import renderer from 'react-test-renderer'

import Alert from '../alert'
import styledComponentsTheme from '../styled-components-theme'

describe('Alert component', () => {
  const alertTypes = ['success', 'info', 'warning', 'danger']
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

  const alignments = [null, '', 'left', 'center', 'right']
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
