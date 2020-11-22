import React from 'react'
import renderer from 'react-test-renderer'
import ExternalLink from '../external-link'

describe('ExternalLink component', () => {
  test('should render correctly', () => {
    let tree = renderer
      .create(<ExternalLink title="Home page" to="/" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
