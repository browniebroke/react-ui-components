import styled from 'styled-components'
import {
  genFlexOrdersFromProp,
  genMaxWidthsFromProps,
  genPaddingFromProps,
  genAlignSelf,
  genTextAlign,
} from './utils'
import { PaddingProps, ResponsiveProps, ThemeProps } from './types'

interface ColOptions extends ThemeProps {
  width?: string
  xsWidth?: string
  smWidth?: string
  mdWidth?: string
  lgWidth?: string
  alignSelf?: string
  textAlign?: string
}

const Col = styled.div<ColOptions & ResponsiveProps & PaddingProps>`
  flex-grow: 1;
  width: ${(props) => (props.width ? props.width : '100%')};
  padding-left: ${(props) => props.theme.gutterWidth};
  padding-right: ${(props) => props.theme.gutterWidth};
  ${genAlignSelf}
  ${genMaxWidthsFromProps}
  ${genFlexOrdersFromProp}
  ${genTextAlign}
  ${genPaddingFromProps}
`

export default Col
