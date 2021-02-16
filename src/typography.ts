// @ts-ignore
import Typography from 'typography'
// @ts-ignore
import gray from 'gray-percentage'

type CallbackFun = (n: number) => any

interface OverrideStyleParams {
  adjustFontSizeTo: CallbackFun
  scale: CallbackFun
  rhythm: CallbackFun
}
interface OverrideStyleOption {
  baseFontSize: number
  bodyWeight: number
}

export const typographyTheme = {
  title: 'Bootstrap',
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  bodyFontFamily: ['Times New Roman', 'Times', 'serif'],
  headerFontFamily: ['Roboto', 'Arial', 'sans-serif'],
  scaleRatio: 2.25,
  bodyWeight: 400,
  headerWeight: 800,
  boldWeight: 'bold',
  overrideStyles: (
    { adjustFontSizeTo, scale, rhythm }: OverrideStyleParams,
    options: OverrideStyleOption
  ) => ({
    body: {
      color: gray(23, 204),
    },
    h1: scale(7 / 6),
    h2: scale(5 / 6),
    h3: scale(4 / 6),
    h4: scale(3 / 6),
    h5: scale(-1 / 6),
    h6: scale(-2 / 6),
    blockquote: {
      ...scale(1 / 4),
      borderLeft: `${rhythm(1 / 6)} solid #eceeef`,
      paddingTop: rhythm(1 / 3),
      paddingBottom: rhythm(1 / 3),
      paddingLeft: rhythm(2 / 3),
      paddingRight: rhythm(2 / 3),
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: gray(54, 204),
      fontWeight: options.bodyWeight,
      fontStyle: 'normal',
    },
  }),
}

const typography = new Typography(typographyTheme)

export default typography
