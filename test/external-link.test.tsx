import React from 'react'
import renderer from 'react-test-renderer'

import { ExternalLink } from '../src'

describe('ExternalLink component', () => {
  test('should render correctly with no children', () => {
    let tree = renderer
      .create(<ExternalLink title="Home page" to="/" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render correctly with a text node as child', () => {
    let tree = renderer
      .create(
        <ExternalLink title="Home page" to="/">
          Home Page
        </ExternalLink>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render correctly with another component as child', () => {
    const MyCustomDiv = () => <div>Custom thing</div>
    let tree = renderer
      .create(
        <ExternalLink title="Home page" to="/">
          <MyCustomDiv />
        </ExternalLink>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
