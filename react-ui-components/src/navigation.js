import React from 'react'
import styled from 'styled-components'

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'column')};
  padding: 0;
`

const NavItem = styled.li`
  padding: ${(props) => props.theme.spacings[1]};

  a,
  a:hover {
    text-decoration: none;
  }
`

const Navigation = ({ children, direction = 'column' }) => (
  <NavigationList direction={direction}>
    {React.Children.map(children, (child) => (
      <NavItem>{child}</NavItem>
    ))}
  </NavigationList>
)

export default Navigation
