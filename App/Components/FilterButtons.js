import React, { useContext, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons'
import { Fontisto, SimpleLineIcons, Foundation, Ionicons } from '@expo/vector-icons';
import {ListContext} from '../Components/Context'

export default function FilterButtons({prevList}) {
    const [text, setText] = useState('All')
    const {setList,setFilterText}=useContext(ListContext)
    const GetText = (event) => {
        var txt=event._dispatchInstances.memoizedProps.children[0][1].props.children
        setText(event._dispatchInstances.memoizedProps.children[0][1].props.children)
        setFilterText(txt)
        if (!txt.match('All')) {
            var Lst = prevList.filter(l => l.sub.match(txt))
            setList(Lst)
        }
        else setList(prevList)
    }

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            style={styles.groupBtn}
        >
                <TouchableOpacity style={{marginRight:2, padding: 5,alignItems:'center'}} onPress={GetText}>
                    <Ionicons name="ios-wallet" size={24} color={text === 'All' ? "green" : 'black'} style={[styles.Icon,text=="All"&&styles.Icon1]} />
                    <Text style={text === 'All' ? { color: 'green', fontStyle: 'italic', fontWeight:'bold'}:{color:'black'}}>All</Text>
                </TouchableOpacity>
            <TouchableOpacity style={{marginRight:8,padding:5,paddingLeft:15,alignItems:'center'}} onPress={GetText}>
                <Fontisto name="atom" size={24} color={text==='Physics'?"green":'black'} style={[{paddingLeft:10},styles.Icon,text=="Physics"&&styles.Icon1]} />
                <Text style={text==='Physics'?{color:'green', fontStyle: 'italic', fontWeight:'bold'}:{color:'black'}}>Physics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:8,padding:5,alignItems:'center'}} onPress={GetText}>
            <SimpleLineIcons name="chemistry" size={24} color={text==='Chemistry'?"green":'black'} style={[{paddingLeft:16},styles.Icon,text=="Chemistry"&&styles.Icon1]}/>
                <Text style={text==='Chemistry'?{color:'green', fontStyle: 'italic', fontWeight:'bold'}:{color:'black'}}>Chemistry</Text>
            </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 8, padding: 5,alignItems:'center' }} onPress={GetText}>
            <MaterialCommunityIcons name="math-compass" size={24} color={text==='Math'?"green":'black'} style={[{paddingLeft:3.5},styles.Icon,text=="Math"&&styles.Icon1]} />
                <Text style={text==='Math'?{color:'green', fontStyle: 'italic', fontWeight:'bold'}:{color:'black'}}>Math</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:8,padding:5,alignItems:'center'}} onPress={GetText}>
            <Foundation name="trees" size={24} color={text==='Biology'?"green":'black'} style={[{paddingLeft:12},styles.Icon,text=="Biology"&&styles.Icon1]}/>
                <Text style={text==='Biology'?{color:'green', fontStyle: 'italic', fontWeight:'bold'}:{color:'black'}}>Biology</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:8,padding:5,alignItems:'center'}} onPress={GetText}>
            <Ionicons name="ios-laptop" size={24} color={text==='ICT'?"green":'black'} style={[styles.Icon,text=="ICT"&&styles.Icon1]} />
                <Text style={text==='ICT'?{color:'green', fontStyle: 'italic', fontWeight:'bold'}:{color:'black'}}>ICT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:5,padding:5,alignItems:'center'}} onPress={GetText}>
            <FontAwesome name="book" size={24} color={text==='Books'?"green":'black'} style={[{paddingLeft:10},styles.Icon,text=="Books"&&styles.Icon1]} />
                <Text style={text==='Books'?{color:'green', fontStyle: 'italic', fontWeight:'bold'}:{color:'black'}}>Books</Text>
            </TouchableOpacity>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    groupBtn: {
        marginTop: 5,
        marginLeft:5,
        flexDirection: 'row',
        overflow: 'hidden',
        paddingBottom: 3 
    },
    Icon: {
        backgroundColor: 'white',
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
        borderWidth: 1,
        textAlign: 'center',
    },
    Icon1: {
        backgroundColor: 'green',
        color: 'white',
        borderWidth:0
       
    }
})
