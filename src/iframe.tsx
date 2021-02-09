import styled from 'styled-components'

import { ResponsiveIframeProps } from './types'

const ResponsiveIframeWrapper = styled.div<ResponsiveIframeProps>`
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;

  &::before {
    display: block;
    content: '';
    padding-top: ${(props) => (100 * props.yRatio) / props.xRatio}%;
  }

  iframe {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`

export default ResponsiveIframeWrapper
