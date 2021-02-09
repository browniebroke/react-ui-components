// @ts-ignore
import Color from 'color'
import { AlertOptions, ColorName, NavBarColor, ThemeProps } from './types'

const getColor = (props: ThemeProps, colorName: ColorName | NavBarColor) => {
  const colorValue = props.theme.colors[colorName]
  return Color(colorValue).hex()
}

const getColorDark = (
  props: ThemeProps,
  colorName: ColorName | NavBarColor
) => {
  const colorValue = props.theme.colors[colorName]
  return Color(colorValue).darken(0.2).hex()
}

export const getPrimaryColor = (props: ThemeProps) => getColor(props, 'primary')
export const getPrimaryColorDark = (props: ThemeProps) =>
  getColorDark(props, 'primary')
export const getSecondaryColor = (props: ThemeProps) =>
  getColor(props, 'secondary')
export const getSecondaryColorDark = (props: ThemeProps) =>
  getColorDark(props, 'secondary')
export const getNavbarColor = (props: ThemeProps) => getColor(props, 'navbar')
export const getNavbarColorDark = (props: ThemeProps) =>
  getColorDark(props, 'navbar')
export const getNavbarTextColor = (props: ThemeProps) =>
  getColor(props, 'navbarText')
export const getNavbarTextColorDark = (props: ThemeProps) =>
  getColorDark(props, 'navbarText')

const mixAlertColor = (colorHex: string, factor: number) => {
  const baseColor = factor > 0 ? Color('#000000') : Color('#ffffff')
  return baseColor.mix(Color(colorHex), Math.abs(factor) * 0.08).hex()
}

export const getAlertBackgroundColor = (props: AlertOptions) => {
  return mixAlertColor(props.theme.colors[props.alertType], -5)
}

export const getAlertTextColor = (props: AlertOptions) => {
  return mixAlertColor(props.theme.colors[props.alertType], 6)
}
