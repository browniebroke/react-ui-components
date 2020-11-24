import Color from 'color'

export const getPrimaryColor = (props) =>
  Color(props.theme.colors.primary).hex()

export const getPrimaryColorDark = (props) =>
  Color(props.theme.colors.primary).darken(0.2).hex()

export const getSecondaryColor = (props) =>
  Color(props.theme.colors.secondary).hex()

export const getSecondaryColorDark = (props) =>
  Color(props.theme.colors.secondary).darken(0.2).hex()

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
