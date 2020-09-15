import React from 'react'
import { renderToString } from 'react-dom/server'
import { AppRegistry } from 'react-native'

// import { Providers } from './src/components/Providers'

export const replaceRenderer = ({
	bodyComponent,
	replaceBodyHTMLString,
	setHeadComponents,
}) => {
	const RootComponent = () => bodyComponent

	AppRegistry.registerComponent('main', () => RootComponent)
	const { element, getStyleElement } = AppRegistry.getApplication('main')

	const markup = renderToString(element)
	const styleElement = getStyleElement()

	replaceBodyHTMLString(markup)
	setHeadComponents([styleElement])
}

/** Attaches the all the app providers in global state */
// export const wrapRootElement = ({ element }) => {
// 	return <Providers>{element}</Providers>
// }
