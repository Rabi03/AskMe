import React from 'react'
import { Linking, StyleSheet, Text, View } from 'react-native'

export default function AccountScreen() {
    return (
        <View style={{alignItems:'center',justifyContent:'center',marginTop:200}}>
            <Text>AccountScreen. <Text style={{color:'blue',textDecorationLine: 'underline'}} onPress={()=>Linking.openURL('https://google.com')}>google.com</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({})
