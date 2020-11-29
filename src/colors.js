import Color from 'color'

const getColor = (props, colorName) => {
  const colorValue = props.theme.colors[colorName]
  return Color(colorValue).hex()
}

const getColorDark = (props, colorName) => {
  const colorValue = props.theme.colors[colorName]
  return Color(colorValue).darken(0.2).hex()
}

export const getPrimaryColor = (props) => getColor(props, 'primary')
export const getPrimaryColorDark = (props) => getColorDark(props, 'primary')
export const getSecondaryColor = (props) => getColor(props, 'secondary')
export const getSecondaryColorDark = (props) => getColorDark(props, 'secondary')
export const getNavbarColor = (props) => getColor(props, 'navbar')
export const getNavbarColorDark = (props) => getColorDark(props, 'navbar')
export const getNavbarTextColor = (props) => getColor(props, 'navbarText')
export const getNavbarTextColorDark = (props) =>
  getColorDark(props, 'navbarText')

const mixAlertColor = (colorHex, factor) => {
  const baseColor = factor > 0 ? Color('#000000') : Color('#ffffff')
  return baseColor.mix(Color(colorHex), Math.abs(factor) * 0.08).hex()
}

export const getAlertBackgroundColor = (props) => {
  return mixAlertColor(props.theme.colors[`${props.alertType}`], -5)
}

export const getAlertTextColor = (props) => {
  return mixAlertColor(props.theme.colors[`${props.alertType}`], 6)
}
