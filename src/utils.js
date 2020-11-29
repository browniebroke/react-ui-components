import React from 'react'

const themeSpacing = (props, value) => props.theme.spacings[value - 1]

const capFirst = (value) => value[0].toUpperCase() + value.slice(1)

/**
 * Map a CSS property to a React component property:
 * @param cssName: CSS property name e.g. max-width
 * @returns string: component property e.g. maxWidth
 */
const cssToProp = (cssName) => {
  // Split on hyphens
  const parts = cssName.split('-')
  const casedParts = parts.map((p, index) => {
    if (index === 0) {
      // First part, do not change case
      return p
    } else {
      // Change first letter to uppercase
      return capFirst(p)
    }
  })
  return casedParts.join('')
}

/**
 * Generate spacing (margin/padding) from a set of props.
 * For a spacingType of 'padding', the props will be:
 * - topPadding
 * - bottomPadding
 * - rightPadding
 * - leftPadding
 * - xPadding (horizontal) for left + right
 * - yPadding (vertical) for top + bottom
 * - sidePadding: all 4 sides at once
 * If one of these props is specified with a value of n,
 * the nth spacing from the them is used.
 *
 * @param props: props of the React component
 * @param spacingType: either margin or padding
 * @returns string: necessary CSS
 */
const genSpacingFromProps = (props, spacingType) => {
  const capFirstSpacingType = capFirst(spacingType)
  const sideDirections = [
    ['top', 'y'],
    ['right', 'x'],
    ['bottom', 'y'],
    ['left', 'x'],
  ]
  const spacingCss = sideDirections.map(([side, direction]) => {
    const value =
      props[`${side}${capFirstSpacingType}`] ??
      props[`${direction}${capFirstSpacingType}`]
    if (value === undefined) {
      return ''
    }
    return `${spacingType}-${side}: ${themeSpacing(props, value)};`
  })
  if (props[`side${capFirstSpacingType}`] !== undefined) {
    const value = props[`side${capFirstSpacingType}`]
    spacingCss.push(`${spacingType}: ${themeSpacing(props, value)};`)
  }
  return spacingCss
}

/**
 * Generate media breakpoint based on the component's props.
 * For example, with a suffix of `MaxWidth` and css name of `max-width`,
 * this will look at a prop mdMaxWidth and use its value
 * as max-width for any screen larger than than the `md` breakpoint.
 *
 * @param props: React component props
 * @param suffix: to derive the prop names
 * @param cssName: the name of the CSS property
 * @returns {string[]}: array of CSS strings
 */
const genResponsiveFromProp = (props, suffix, cssName) => {
  return Object.keys(props.theme.gridBreakpoints).map((bp) => {
    const bpProp = `${bp}${suffix}`
    if (props[bpProp] !== undefined) {
      const cssValue = props[bpProp]
      return `@media (min-width: ${props.theme.gridBreakpoints[bp]}) {
        ${cssName}: ${cssValue};
      }
      `
    } else {
      return ''
    }
  })
}

/**
 * Convert a React prop + value to a CSS property + value
 * e.g. justifyContent="center" becomes `justify-content: center`
 *
 * @param props: React component props
 * @param cssName: the CSS property name
 * @returns {string}: CSS string
 */
const genCssFromProp = (props, cssName) => {
  const propName = cssToProp(cssName)
  return props[propName] ? `${cssName}: ${props[propName]};` : ''
}

export const genMarginFromProps = (props) =>
  genSpacingFromProps(props, 'margin')
export const genPaddingFromProps = (props) =>
  genSpacingFromProps(props, 'padding')

export const genMaxWidthsFromProps = (props) =>
  genResponsiveFromProp(props, 'MaxWidth', 'max-width')
export const genFlexOrdersFromProp = (props) =>
  genResponsiveFromProp(props, 'Order', 'order')

export const genJustifyContent = (props) =>
  genCssFromProp(props, 'justify-content')
export const genAlignItem = (props) => genCssFromProp(props, 'align-item')
export const genAlignSelf = (props) => genCssFromProp(props, 'align-self')
export const genTextAlign = (props) => genCssFromProp(props, 'text-align')
