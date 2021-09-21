import React, { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Theme from '../styles/index'

export default function Header({children}:{children:ReactNode}) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        padding: 10,
    }
})
