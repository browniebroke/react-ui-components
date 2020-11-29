import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import styledComponentsTheme from '../styled-components-theme'
import ResponsiveIframeWrapper from '../iframe'

describe('ResponsiveIframeWrapper component', () => {
  test('should render correctly', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={styledComponentsTheme}>
          <ResponsiveIframeWrapper yRatio={21} xRatio={9} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
