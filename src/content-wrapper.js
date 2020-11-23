import styled from 'styled-components'
import PropTypes from 'prop-types'

/**
 * Wraps around the main content to give it an appropriate min-height
 * and make sure the footer sticks to the bottom of the page.
 */
const ContentWrapper = styled.div`
  min-height: calc(
    100vh - ${(props) => (props.headerHeight ? props.headerHeight : '100px')} -
      ${(props) => (props.footerHeight ? props.footerHeight : '6rem')}
  );
`

export default ContentWrapper

ContentWrapper.propTypes = {
  /**
   * Height of the site header (with CSS unit)
   */
  headerHeight: PropTypes.string,
  /**
   * Height of the site footer (with CSS unit)
   */
  footerHeight: PropTypes.string,
}

ContentWrapper.defaultProps = {
  headerHeight: '100px',
  footerHeight: '6rem',
}
