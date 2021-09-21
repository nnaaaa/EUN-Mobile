import React from 'react'
import Theme, { Color } from '../styles/index'
import Icon from 'react-native-vector-icons/Ionicons'
import { Avatar, Divider, HStack, Input } from 'native-base'

export default function Status() {
	return (
		<HStack p={2}>
			<Avatar mr={2} />
			<Input isFullWidth placeholder="Bạn đang nghĩ gì" />
		</HStack>
	)
}
