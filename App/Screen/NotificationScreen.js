import React from 'react'
import { StyleSheet, Text,View, Button, FlatList,Image} from 'react-native'
import { Screen } from 'react-native-screens'
import moment from 'moment';

const notifyList = [
    {
        id:1,
        info: {
            name: 'Zhalok Rahman',
            image:'https://scontent.fdac17-1.fna.fbcdn.net/v/t1.0-9/78547037_2251029358336469_8391716435335839744_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=JGdRmCj8FoQAX8fHzPZ&_nc_ht=scontent.fdac17-1.fna&oh=c8331f805d6f391d398f017a908b5fa7&oe=5FD302BC'
        },
        message: 'answered your question',
        time:'11/12/2020 21:19:30'
    },
    {
        id:2,
        info: {
            name: 'Rabi Islam',
            image:'https://lh3.googleusercontent.com/GPC-DPV91Mp3j7-eFT8Tcs1DG9nZt3QZg7aXbYlhpuX4ec3U58UE8EcmUbCf1ZmnEc8'
        },
        message: 'replied on your comment',
        time:'11/12/2020 22:10:00'
    },
    {
        id:3,
        info: {
            name: 'Rabi Islam',
            image:'https://lh3.googleusercontent.com/GPC-DPV91Mp3j7-eFT8Tcs1DG9nZt3QZg7aXbYlhpuX4ec3U58UE8EcmUbCf1ZmnEc8'
        },
        message: 'replied on your comment',
        time:'11/12/2020 22:10:00'
    },
    {
        id:4,
        info: {
            name: 'Rabi Islam',
            image:'https://lh3.googleusercontent.com/GPC-DPV91Mp3j7-eFT8Tcs1DG9nZt3QZg7aXbYlhpuX4ec3U58UE8EcmUbCf1ZmnEc8'
        },
        message: 'replied on your comment',
        time:'11/12/2020 22:10:00'
    },
    {
        id:5,
        info: {
            name: 'Rabi Islam',
            image:'https://lh3.googleusercontent.com/GPC-DPV91Mp3j7-eFT8Tcs1DG9nZt3QZg7aXbYlhpuX4ec3U58UE8EcmUbCf1ZmnEc8'
        },
        message: 'replied on your comment',
        time:'11/12/2020 22:10:00'
    },
    {
        id:6,
        info: {
            name: 'Rabi Islam',
            image:'https://lh3.googleusercontent.com/GPC-DPV91Mp3j7-eFT8Tcs1DG9nZt3QZg7aXbYlhpuX4ec3U58UE8EcmUbCf1ZmnEc8'
        },
        message: 'replied on your comment',
        time:'11/12/2020 22:10:00'
    },
    {
        id:7,
        info: {
            name: 'Rabi Islam',
            image:'https://lh3.googleusercontent.com/GPC-DPV91Mp3j7-eFT8Tcs1DG9nZt3QZg7aXbYlhpuX4ec3U58UE8EcmUbCf1ZmnEc8'
        },
        message: 'replied on your comment',
        time:'11/12/2020 22:10:00'
    },
    {
        id:8,
        info: {
            name: 'kobir Islam',
            image:'https://lh3.googleusercontent.com/GPC-DPV91Mp3j7-eFT8Tcs1DG9nZt3QZg7aXbYlhpuX4ec3U58UE8EcmUbCf1ZmnEc8'
        },
        message: 'replied on your comment',
        time:'11/12/2020 22:10:00'
    },
    {
        id:9,
        info: {
            name: 'kobir Islam',
            image:'https://lh3.googleusercontent.com/GPC-DPV91Mp3j7-eFT8Tcs1DG9nZt3QZg7aXbYlhpuX4ec3U58UE8EcmUbCf1ZmnEc8'
        },
        message: 'replied on your comment',
        time:'11/12/2020 22:10:00'
    }
]

export default function NotificationScreen() {

    const getSendTime = (t2) => {
        var date = new Date().toLocaleDateString()
        var time = new Date().toLocaleTimeString()
        var now = date + " " + time
        var ms = moment.utc(moment(now, "MM/DD/YYYY HH:mm:ss").diff(moment(t2, "MM/DD/YYYY HH:mm:ss"))).format('DD:HH:mm:ss');
        var s=ms.split(':')
        if (s[0] === '00') {
            if (s[1] === '00') {
                if (s[2] === '00') {
                    if (s[3] === '00')
                    return 'Just Now'
                    else return parseInt(s[3]) +' seconds ago'
                }
                else return parseInt(s[2])+' minutes ago' 
            }
            
            else {
                return parseInt(s[1])+' hours ago'
            }
        }
        else return parseInt(s[0])+' days ago'
    }
    
    return (
            <View style={{paddingBottom:110}}>
            <Text style={{ marginTop: 26, textAlign: 'center', fontSize: 20 }}>Notifications</Text>
            <FlatList 
                data={notifyList}
                keyExtractor={item => item.id.toString()} 
                onEndReachedThreshold={0.1}
                renderItem={({ item }) =>
                    <View style={{backgroundColor:'rgba(0, 130, 0,0.9)',margin:10,borderRadius:10,marginBottom:3}}>
                        <View style={{ flexDirection: 'row', marginLeft: 15, paddingTop:10}}>
                            <Image style={{ width: 60, height: 60, borderRadius: 30 }} source={{ uri: item.info.image }} />
                            <View>
                                <Text style={{ marginLeft: 10, fontSize: 20, width: '85%', color: 'white' }}>{item.info.name} {item.message}</Text>
                                <Text style={{ fontSize: 17, margin: 7, color: 'white' }}>{getSendTime(item.time)}</Text>
                            </View>
                            
                        </View>
                    </View>
                } 
                />
                </View>
            
    )
}

const styles = StyleSheet.create({})
