import React from 'react'
import { extendTheme, NativeBaseProvider } from 'native-base'
import { Provider } from 'react-redux'
import Main from './main'
import { store } from './src/app/store'

export default function App() {
	const theme = extendTheme({
		colors: {
			secondary: {
				500: '#F06292',
			},
		},
		components: {
			Input: {
				baseStyle: {},
				defaultProps: {
					variant: 'unstyled',
				},
				variants: {},
				sizes: {},
			},
			Avatar: {
				baseStyle: {},
				defaultProps: {
					size: '10',
				},
				variants: {},
				sizes: {},
			},
		},
	})
	return (
		<Provider store={store}>
			<NativeBaseProvider theme={theme}>
				<Main />
			</NativeBaseProvider>
		</Provider>
	)
}
