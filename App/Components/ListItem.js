import React, { useContext} from 'react'
import { FlatList, StyleSheet, Text, View,Dimensions, ScrollView } from 'react-native'
import Card from './Card'
import {ListContext} from '../Components/Context'



export default function ListItem({nav}) {
    const { list } = useContext(ListContext)

    return (
        <View style={{ flex: 1,paddingBottom:55 }}>
            {list.length===0&&<Text style={{fontSize:20,textAlign:'center'}}>No Questions Yet</Text>}
            <FlatList 
                data={list}
                keyExtractor={item => item.id.toString()} 
                onEndReachedThreshold={0.1}
                renderItem={({ item }) =>
                    <Card 
                          name={item.name}
                          time={item.time}
                          sub={item.sub}
                          Q={item.Q}
                          ans={item.ans}
                          view={item.view}
                          onPress={()=>nav.navigate('ListDetails',item)}
                        />
                } 
            />
            </View>
    )
}

const styles = StyleSheet.create({})
