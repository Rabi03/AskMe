import React from 'react'
import { StyleSheet, View} from 'react-native'

export default function ListItemSeparator() {
    return (
        <View style={styles.separator} />
    )
}

const styles = StyleSheet.create({
    separator: {
        width: '96.7%',
        height: 1,
        marginTop:15,
        backgroundColor: 'black',
        marginLeft: 8,
        marginBottom:7
    }
})
