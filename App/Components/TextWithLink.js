import React from 'react'
import { Linking, StyleSheet, Text, View } from 'react-native'

export default function TextWithLink({ text,linkStyle }) {

    const PressAbleLink = (url ,i)=> <Text key={i} style={{color:'blue',textDecorationLine:'underline',fontWeight:'bold'}} onPress={() => Linking.openURL(url)}> {url} </Text>
    
    var t = text
    var j=-1
    
    var links = text.match(/https(.*?)com/g)
    if (links == null) {
        links = text.match(/https(.*?)(?=\))/g)
    }
    t= t.replace(/[()]/g, '')
    links.forEach(l => t = t.replace(l, " link "))
    const TextList=t.split(' ')
    
    

    return (
        <View style={[{ marginLeft: 23, marginTop: 10 },linkStyle]}>
            <Text style={{fontSize:16}}>{TextList.map((txt, i) => {
                if (txt.match('link')) {
                    j++
                    return PressAbleLink(links[j],j)
                }
                else return txt+' '
            })}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({})
