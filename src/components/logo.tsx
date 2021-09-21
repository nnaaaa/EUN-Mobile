import React from 'react'
import { Text } from 'react-native'
import { useTheme } from 'native-base'



const Logo = () => {
    const theme = useTheme()
    return (
        <Text style={{
            color: theme.colors.tertiary[500],
            fontSize: 18,
            fontWeight: "700",
        }}>
            facebook
        </Text>
    )
}

export default Logo
