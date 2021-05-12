import React from 'react'
import { StyleSheet, Text, View, Image, Linking, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import {PhyIcon,ChemIcon,MatIcon,BioIcon,IctIcon,BookIcon} from '../Components/Icons'
import Screen from '../Components/Screen'
import SentTime from '../Components/GetTimeDiference'
import TextWithLink from '../Components/TextWithLink'
import AnswerList from '../Components/AnswerList';
import PostAnswerForm from '../Components/forms/PostAnswerForm';




const description="Hello all.\nI have the time format from firebase. Show me how to convert to Epoch timestamp on my real device https://google.com and https://facebook.com . Then how to publish every code in https://github.com"

export default function ListDetailsScreen({ route }) {
    const list = route.params
    
    
    const getIcon = () => {
        if (list.sub === 'Physics') return <PhyIcon color='green' />
        else if (list.sub === 'Chemistry') return <ChemIcon color='green'/>
        else if (list.sub === 'Math') return <MatIcon color='green' />
        else if (list.sub === 'Biology') return <BioIcon color='green' />
        else if (list.sub === 'ICT') return <IctIcon color='green' />
        else if(list.sub==='Book') return <BookIcon color='green'/>
    }

    return (
        <Screen>
            <View style={{ flexDirection: 'row', marginTop:10,justifyContent:'center'}}>
            <Image
            source={require('../../assets/askme.png')}
            style={{width:36,height:34}}
            />
            <Text style={{ paddingTop: 2,fontSize: 20, marginLeft: 5, color: 'black',fontStyle:'italic' }}>Ask</Text>
            <Text style={{ paddingTop: 10, fontSize: 12, color: 'green',fontStyle:'italic' }}>me</Text>
            </View>
            <ScrollView>
            <View style={{flex:1,marginBottom:50}}>
            <View style={{marginTop:15,marginLeft:10,flexDirection:'row'}}>
                <Image style={{ width: 45, height: 45, borderRadius: 22.5}} source={{ uri: 'https://lh3.googleusercontent.com/GPC-DPV91Mp3j7-eFT8Tcs1DG9nZt3QZg7aXbYlhpuX4ec3U58UE8EcmUbCf1ZmnEc8' }} />
                <View style={{padding:3,paddingLeft:5}}>
                    <Text style={{fontSize:16}}>{list.name}</Text>
                    <View style={{flexDirection:'row'}}>
                    <FontAwesome name="graduation-cap" size={18} color="black" style={{marginTop:2}} />
                    <Text style={{paddingLeft:2}}>Student</Text>
                    </View>
                </View>
                <Text style={{ textAlign: 'center', marginLeft: 160, marginRight: 5, marginTop: 10,color:'green' }}> {list.sub}</Text>
                <View style={{marginTop:10}}>
                {getIcon()}
                </View>
            </View>
                
            <Text style={{ marginTop: 12, marginLeft: 10, fontSize: 24,marginRight:5 }}>{list.Q}</Text>
            <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:18}}>Asked {SentTime(list.time)}  ●</Text>
                <Text>  {list.view} Views</Text>
                
            </View>
            <TextWithLink text={description} />

            <Text style={{ margin: 10, fontSize: 20,borderBottomWidth:1 }}>{list.ans.length?list.ans.length:'No'} Answers</Text>
            <AnswerList AnsList={list.ans} />
            <PostAnswerForm />

            </View>
            </ScrollView>
        </Screen>
    )
}

const styles = StyleSheet.create({})
