import styled from 'styled-components'
import PropTypes from 'prop-types'

import { getAlertBackgroundColor, getAlertTextColor } from './colors'

/**
 * Alert component
 */
const Alert = styled.div`
  padding: ${(props) => props.theme.spacings[2]}
    ${(props) => props.theme.spacings[3]};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  background-color: ${getAlertBackgroundColor};
  color: ${getAlertTextColor};
  font-size: 1.25em;
`

export default Alert

Alert.propTypes = {
  /**
   * Type of alert, can be any type with a key in colors
   */
  alertType: PropTypes.string.isRequired,
  /**
   * Text alignment in the alert box
   */
  textAlign: PropTypes.string,
}

Alert.defaultProps = {
  textAlign: 'center',
}
