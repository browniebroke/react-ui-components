import styled from 'styled-components'
import {
  genMarginFromProps,
  genPaddingFromProps,
  genAlignItem,
  genJustifyContent,
} from './utils'

const Row = styled.div`
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
