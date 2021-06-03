import type { ComponentType } from 'react'
import { createThemedComponent } from './create-themed-component'
import type { ThemedOptions } from './types'

/**
 * `styled` is little more than a recreation of `createThemedComponent`, with a nicer API. It does the same thing, but looks a bit nicer to use and has a clean name 😇
 *
 * ```jsx
 * import { Text } from 'react-native'
 *
 * const MyText = styled(Text)({
 *   borderBottomStyle: 'solid',
 *   color: ['primary', 'secondary']
 * })
 * ```
 *
 */
export function styled<P>(
  Component: ComponentType<P>,
  {
    themeKey,
    defaultVariant,
  }: Pick<ThemedOptions, 'themeKey' | 'defaultVariant'> = {}
) {
  return function dripsyFactory<Extra>(
    defaultStyle?: ThemedOptions<Extra>['defaultStyle']
  ) {
    return createThemedComponent<P, Extra>(Component, {
      defaultVariant,
      themeKey,
      defaultStyle,
    })
  }
}
