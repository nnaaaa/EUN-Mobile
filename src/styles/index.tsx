import { StyleSheet } from "react-native"
export const Color = {
    red: "#CD113B",
    gray:"#d8d5d5"
}

const Theme = StyleSheet.create({
    text: {
        color: Color.red,
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 10
    },
    icon: {
        fontWeight: "bold",
        fontSize: 20,
        color: Color.red
    },
    marginBot: {
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: 'gray'
    }
})
export default Theme