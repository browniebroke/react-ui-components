import Color from 'color'

export const getPrimaryColor = (props) =>
  Color(props.theme.colors.primary).hex()

export const getPrimaryColorDark = (props) =>
  Color(props.theme.colors.primary).darken(0.2).hex()

export const getSecondaryColor = (props) =>
  Color(props.theme.colors.secondary).hex()

export const getSecondaryColorDark = (props) =>
  Color(props.theme.colors.secondary).darken(0.2).hex()
