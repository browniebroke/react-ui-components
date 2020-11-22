import React from 'react'
import styled from 'styled-components'
import Container from './container'

const SiteNavBar = styled.nav`
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacings[1]}
    ${(props) => props.theme.spacings[2]};
`

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.spacings[1]} 0;

  > a {
    display: flex;
    align-items: center;
  }
`

const Header = ({ children }) => (
  <header>
    <SiteNavBar>
      <HeaderContainer>{children}</HeaderContainer>
    </SiteNavBar>
  </header>
)

export default Header
