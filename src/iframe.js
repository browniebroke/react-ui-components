import styled from 'styled-components'
import PropTypes from 'prop-types'

const ResponsiveIframeWrapper = styled.div`
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

ResponsiveIframeWrapper.propTypes = {
  /**
   * Vertical part (Y) of the aspect ratio (Y by X)
   */
  yRatio: PropTypes.number.isRequired,
  /**
   * Horizontal part (X) of the aspect ratio (Y by X)
   */
  xRatio: PropTypes.number.isRequired,
}

ResponsiveIframeWrapper.defaultProps = {}
