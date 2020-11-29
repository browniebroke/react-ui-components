import React from 'react'
import renderer from 'react-test-renderer'

import Column from '../column'
import styledComponentsTheme from '../styled-components-theme'
import { ThemeProvider } from 'styled-components'

describe('Column component', () => {
  test('should render correctly without props', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={styledComponentsTheme}>
          <Column />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render correctly with some props', () => {
    let tree = renderer
      .create(
        <ThemeProvider theme={styledComponentsTheme}>
          <Column xsWidth="50%" smWidth="33%" mdWidth="25%" lgWidth="20%" />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
