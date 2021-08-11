import { ThemeProps as BaseThemeProps } from 'styled-components'

export type ColorName =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

export type NavBarColor = 'navbar' | 'navbarText'

export type BreakPoint = 'sm' | 'md' | 'lg' | 'xl'
export type SpacingType = 'padding' | 'margin'
export type SpacingValue = 1 | 2 | 3 | 4 | 5
export type CssProps =
  | 'align-item'
  | 'align-self'
  | 'justify-content'
  | 'text-align'
export type ReactCssPropsName =
  | 'alignItem'
  | 'alignSelf'
  | 'justifyContent'
  | 'textAlign'
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export type Side = 'top' | 'right' | 'bottom' | 'left'
export type Direction = 'x' | 'y'

export type SideSpacing = `${Side}${Capitalize<SpacingType>}`
export type DirectionSpacing = `${Direction}${Capitalize<SpacingType>}`
export type AllSideSpacing = `side${Capitalize<SpacingType>}`

export interface Theme {
  colors: {
    primary: string
    secondary: string
    success: string
    info: string
    warning: string
    danger: string
    navbar: string
    navbarText: string
  }
  gutterWidth: string
  spacings: number[]
  gridBreakpoints: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
  containersMaxWidth: {
    sm: string
    md: string
    lg: string
    xl: string
  }
}

export type ThemeProps = BaseThemeProps<Theme>

export interface PaddingProps extends ThemeProps {
  topPadding?: SpacingValue
  bottomPadding?: SpacingValue
  rightPadding?: SpacingValue
  leftPadding?: SpacingValue
  xPadding?: SpacingValue
  yPadding?: SpacingValue
  sidePadding?: SpacingValue
}

export interface MarginProps extends ThemeProps {
  topMargin?: SpacingValue
  bottomMargin?: SpacingValue
  rightMargin?: SpacingValue
  leftMargin?: SpacingValue
  xMargin?: SpacingValue
  yMargin?: SpacingValue
  sideMargin?: SpacingValue
}

export type SpacingComponentProps = PaddingProps & MarginProps

export interface MaxWidthProps extends ThemeProps {
  MaxWidth?: string
  xsMaxWidth?: string
  smMaxWidth?: string
  mdMaxWidth?: string
  lgMaxWidth?: string
  xlMaxWidth?: string
}

export interface FlaxOrderProps extends ThemeProps {
  xsOrder?: string | number
  smOrder?: string | number
  mdOrder?: string | number
  lgOrder?: string | number
  xlOrder?: string | number
}

export type ResponsiveProps = MaxWidthProps | FlaxOrderProps

export interface ReactCssProps extends ThemeProps {
  alignItem?: string
  alignSelf?: string
  justifyContent?: string
  textAlign?: string
}

export interface AlertOptions extends ThemeProps {
  /** type of alert */
  alertType: ColorName
  /** text alignment, default to 'center' */
  textAlign?: string
}

export interface ContentWrapperProps extends ThemeProps {
  /** Height of the site header (with CSS unit) */
  headerHeight?: string
  /** Height of the site footer (with CSS unit) */
  footerHeight?: string
}

export interface ExternalLinkProps {
  /** URL to link to */
  to: string
  /** Title for accessibility */
  title: string
}

export interface NavigationProps {
  /** Flex direction of the container (default to column) */
  direction?: FlexDirection
}

export interface ResponsiveIframeProps {
  /** Horizontal part (X) of the aspect ratio (Y by X) */
  xRatio: number
  /** Vertical part (Y) of the aspect ratio (Y by X) */
  yRatio: number
}

export interface ListInlineProps {
  /** Overrides horizontal padding between items inline */
  padding?: string | number
}
