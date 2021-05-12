import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

export default function SplashScreen() {
  const [txt1, setTxt1] = useState('')
  const [txt2, setTxt2] = useState('')
  const [txt3, setTxt3] = useState('')
  const [txt4, setTxt4] = useState('')
  const [txt5,setTxt5]=useState('')

    useEffect(() => {
    setTimeout(() => {setTxt1('Ask') }, 1000)
    setTimeout(() => { setTxt2('me') }, 1800)
    setTimeout(() => { setTxt3('The Ultimate') }, 2500)
    setTimeout(() => { setTxt4(' Questions & Answers') }, 3300)
    setTimeout(() => { setTxt5('platform') }, 3800)
  },[])

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
      <Image
        source={require('../../assets/askme.png')}
        style={{width:62,height:60}}
      />
        <Text style={{ paddingTop: 5, fontSize: 32, marginLeft: 5, color: 'black', fontStyle: 'italic' }}>{txt1}</Text>
      <Text style={{ paddingTop: 22, fontSize: 15, color: 'green',fontStyle:'italic' }}>{txt2}</Text>
      </View>
      <Text style={{ color: 'green', fontStyle: 'italic', fontWeight: 'bold', marginTop: 10 }}>{txt3} {txt4} {txt5}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
      },
})
