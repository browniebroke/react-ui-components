import React, { FC } from 'react'
import styled from 'styled-components'
import Container from './container'
import {
  getNavbarColor,
  getNavbarTextColor,
  getNavbarTextColorDark,
} from './colors'
import { ThemeProps } from './types'

const SiteNavBar = styled.nav<ThemeProps>`
  color: ${getNavbarTextColor};

  a,
  a:visited {
    color: ${getNavbarTextColor};
    text-decoration: none;
  }

  a:hover,
  a:focus {
    color: ${getNavbarTextColorDark};
    text-decoration: none;
  }

  background-color: ${getNavbarColor};
  padding: ${(props) => props.theme.spacings[1]}
    ${(props) => props.theme.spacings[2]};
`

const HeaderContainer = styled(Container)<ThemeProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.spacings[1]} 0;
`

const Header: FC = ({ children }) => (
  <header>
    <SiteNavBar>
      <HeaderContainer>{children}</HeaderContainer>
    </SiteNavBar>
  </header>
)

export default Header
