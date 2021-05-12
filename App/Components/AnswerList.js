import React, { useState } from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import TextWithLink from './TextWithLink'
import { AntDesign,Foundation } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function AnswerList({ AnsList }) {
    const [liked, setLiked] = useState(false)
    const [checkComment, setCheckComment] = useState(false)
    const [numLike, setnumLike] = useState(0)
    const [commentIndex,setIndex]=useState(null)
    
   
    return (
        <View>
            {AnsList.map((ansList, j) =>     
        <View key={j} style={{marginRight:5}}>
            <View style={{marginTop:5,marginLeft:18,flexDirection:'row'}}>
                <Image style={{ width: 45, height: 45, borderRadius: 22.5}} source={{ uri: ansList.image }} />
                <View style={{padding:3,paddingLeft:5}}>
                    <Text style={{fontSize:16}}>{ansList.name}</Text>
                    <Text>{ new Date(ansList.time).toDateString().substring(4)}</Text>
                </View>
            </View>
                    {ansList.answer&&ansList.answer.map((ans, i) =>
                            <View key={i}>
                            <TextWithLink text={ans.des} />
                            {ans.image &&
                                ans.image.map((img, k) =>
                                    <Image 
                                        key={k}
                                        source={{ uri: img }}
                                        style={styles.img}
                                />)
                            }
                            <View style={{ flexDirection: 'row',margin:10,borderTopWidth:1,justifyContent:'center',paddingTop:6,borderBottomWidth:1,paddingBottom:6 }}>
                                    <TouchableOpacity style={{flexDirection:'row',width:100,height:35,justifyContent:'center',backgroundColor:'rgb(210, 210, 210)',borderRadius:10}} onPress={() => { ans.like&&liked ? setnumLike(l=>numLike<ans.like? ans.like+l-1:l-=1) : setnumLike(l=>ans.like!==numLike? ans.like+l+1:l+1);liked ? setLiked(false) : setLiked(true);}}>     
                                    <AntDesign name="like1" size={22} color={liked?"green":"black"} style={{ marginTop: 5 }}  />
                                <Text style={[{ marginTop: 8, marginLeft: 4,fontSize:16},liked?{color:"green"}:{color:"black"}]}>{ ans.like?numLike?numLike:ans.like:''}</Text>
                                    </TouchableOpacity>        
                                <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 85, width: 100, height: 35, justifyContent: 'center', backgroundColor: 'rgb(210, 210, 210)', borderRadius: 10 }} onPress={() => { (checkComment&&commentIndex===j) ? setCheckComment(false) : setCheckComment(true);setIndex(j)}}>  
                                    <Foundation name="comment" size={24} color={(checkComment&&commentIndex===j) ?"green":"black"} style={{ marginTop: 6 }}  />
                                    <Text style={[{ marginTop: 6, marginLeft: 4, fontSize:16},(checkComment&&commentIndex===j) ?{color:"green"}:{color:"black"}]}>{ ans.comment?ans.comment.length:''}</Text>
                                    </TouchableOpacity>
                            </View>
                            <View style={[{paddingRight:5,marginLeft:10,marginRight:10,paddingBottom:10},checkComment&&{borderBottomWidth:1}]}>
                            {(checkComment&&commentIndex===j) && ans.comment.map((com, index)=>
                                <View key={index} style={{marginTop:5,marginLeft:20,flexDirection:'row'}}>
                                    <Image style={{ width: 45, height: 45, borderRadius: 22.5}} source={{ uri: com.image }} />
                                    <View style={{marginLeft:5,backgroundColor:'rgb(210, 210, 210)',width:295,padding:5,borderRadius:10}}>
                                        <Text style={{ fontSize: 16 }}>{com.name}</Text>
                                        <TextWithLink text={com.reply} linkStyle={{marginLeft:5,marginTop:2}} />
                                    </View>
                                </View>
                                )}
                            </View>
                            
                            </View>
                    )}
           
                </View>
            )}

            </View>
    )
}

const styles = StyleSheet.create({
    img: {
        flex: 1,
        width: null,
        height: 200,
        resizeMode: 'contain',
        marginTop:5
    }
})
