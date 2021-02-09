import styled from 'styled-components'
import { BreakPoint, ThemeProps } from './types'

const genMediaQueries = (props: ThemeProps) => {
  const maxWidthKeys: BreakPoint[] = Object.keys(
    props.theme.containersMaxWidth
  ) as BreakPoint[]
  return maxWidthKeys.map(
    (k: BreakPoint) =>
      `@media (min-width: ${props.theme.gridBreakpoints[k]}) {
        max-width: ${props.theme.containersMaxWidth[k]};
      }
      `
  )
}

const Container = styled.div<ThemeProps>`
  width: 100%;
  padding-right: ${(props) => props.theme.gutterWidth};
  padding-left: ${(props) => props.theme.gutterWidth};
  margin-right: auto;
  margin-left: auto;

  ${genMediaQueries}
`

export default Container
