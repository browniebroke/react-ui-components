import styled from 'styled-components'
import {
  genMarginFromProps,
  genPaddingFromProps,
  genAlignItem,
  genJustifyContent,
} from './utils'
import { ReactCssProps, SpacingComponentProps, ThemeProps } from './types'

type RowProps = ThemeProps | SpacingComponentProps | ReactCssProps

const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  margin-right: -${(props) => props.theme.gutterWidth};
  margin-left: -${(props) => props.theme.gutterWidth};

  ${genMarginFromProps}
  ${genPaddingFromProps}
  ${genJustifyContent}
  ${genAlignItem}
`

export default Row
