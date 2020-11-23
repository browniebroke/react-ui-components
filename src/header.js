import React from 'react'
import styled from 'styled-components'
import Container from './container'
import {
  getPrimaryColor,
  getSecondaryColor,
  getSecondaryColorDark,
} from './colors'

const SiteNavBar = styled.nav`
  background-color: ${getPrimaryColor};
  padding: ${(props) => props.theme.spacings[1]}
    ${(props) => props.theme.spacings[2]};
`

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.spacings[1]} 0;

  color: ${getSecondaryColor};

  a,
  a:visited {
    color: ${getSecondaryColor};
    text-decoration: none;
  }

  a:hover,
  a:focus {
    color: ${getSecondaryColorDark};
    text-decoration: none;
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
