import React from 'react'
import { StyleSheet, TouchableOpacity,View,Text, Image } from 'react-native'
import {PhyIcon,ChemIcon,MatIcon,BioIcon,IctIcon,BookIcon} from '../Components/Icons'

export default function Card({ name, time, sub, Q, ans, view, onPress }) {
    var t = new Date(time).toDateString().substring(4);

    
    const getIcon = () => {
        if (sub === 'Physics') return <PhyIcon />
        else if (sub === 'Chemistry') return <ChemIcon />
        else if (sub === 'Math') return <MatIcon />
        else if (sub === 'Biology') return <BioIcon />
        else if (sub === 'ICT') return <IctIcon />
        else if(sub==='Book') return <BookIcon />
    }

    return (
        <TouchableOpacity style={{backgroundColor:'rgba(0, 130, 0,0.9)',margin:10,borderRadius:10,marginBottom:3}} onPress={onPress}>
            <View style={{flexDirection:'row',margin:15}}>
                <Text style={{ color: 'white' }}>By {name} . {t}</Text>
                <View style={{flexDirection:'row',marginLeft:86,justifyContent:'center'}}>
                    <Text style={{ color: 'white', paddingRight: 5 }} >{sub}</Text>
                    {getIcon()}
                </View>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',marginLeft:15}}>
                <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: 'https://lh3.googleusercontent.com/GPC-DPV91Mp3j7-eFT8Tcs1DG9nZt3QZg7aXbYlhpuX4ec3U58UE8EcmUbCf1ZmnEc8' }} />
                <Text style={{ marginLeft: 10, fontSize: 20, width: '80%', color: 'white' }}>{Q}</Text>
            </View>
            <Text style={{ fontSize: 17, marginLeft: 15, margin: 10, color: 'white' }}>{ans.length} answers ● {view} views</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})
