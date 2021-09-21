import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import Chat from './src/screen/Chat'
import Home from './src/screen/Home'
import { useTheme } from 'native-base'
const Tab = createMaterialBottomTabNavigator()

export default function Main() {
	const theme = useTheme()
	return (
		<NavigationContainer>
			<Tab.Navigator
				labeled={false}
				barStyle={{
					backgroundColor: theme.colors.tertiary[500],
				}}
			>
				<Tab.Screen
					name="home"
					component={Home}
					options={{
						tabBarIcon: ({ color }) => (
							<Icon name="home-outline" color={color} size={20} />
						),
					}}
				/>
				<Tab.Screen
					name="chat"
					component={Chat}
					options={{
						tabBarIcon: ({ color }) => (
							<Icon name="chatbox-outline" color={color} size={20} />
						),
					}}
				/>
				<Tab.Screen
					name="notifications"
					component={Chat}
					options={{
						tabBarIcon: ({ color }) => (
							<Icon name="notifications-outline" color={color} size={20} />
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	)
}
