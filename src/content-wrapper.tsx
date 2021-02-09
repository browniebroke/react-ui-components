import styled from 'styled-components'
import { ContentWrapperProps } from './types'

/**
 * Wraps around the main content to give it an appropriate min-height
 * and make sure the footer sticks to the bottom of the page.
 */
const ContentWrapper = styled.div<ContentWrapperProps>`
  min-height: calc(
    100vh - ${(props) => (props.headerHeight ? props.headerHeight : '100px')} -
      ${(props) => (props.footerHeight ? props.footerHeight : '6rem')}
  );
`

export default ContentWrapper
