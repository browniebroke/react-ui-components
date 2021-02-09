import styled from 'styled-components'

import { getAlertBackgroundColor, getAlertTextColor } from './colors'
import { AlertOptions } from './types'

/**
 * Alert component
 */
const Alert = styled.div<AlertOptions>`
  padding: ${(props) => props.theme.spacings[2]}
    ${(props) => props.theme.spacings[3]};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  background-color: ${getAlertBackgroundColor};
  color: ${getAlertTextColor};
  font-size: 1.25em;
`

export default Alert
