import React from 'react'
import styled from 'styled-components'
import { ListInlineProps } from './types'

const ListInlineStyle = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItemStyle = styled.li<ListInlineProps>`
  margin-bottom: 0;
  display: inline-block;
  padding: 0
    ${(props) => (props.padding ? props.padding : props.theme.spacings[1])};
`

const ListInline = ({ children, padding }: ListInlineProps) => {
  return (
    <ListInlineStyle>
      {React.Children.map(children, (child, i) => (
        <ListItemStyle key={i} padding={padding}>
          {child}
        </ListItemStyle>
      ))}
    </ListInlineStyle>
  )
}

export default ListInline
