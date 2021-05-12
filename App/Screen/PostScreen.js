import { Formik } from 'formik'
import React, { useState,useRef } from 'react'
import { StyleSheet, Text, View,Image, TextInput, Alert, ScrollView,TouchableOpacity } from 'react-native'
import Screen from '../Components/Screen'
import { AntDesign,MaterialIcons,Feather,FontAwesome } from '@expo/vector-icons';
import ImageInputList from '../Components/ImageInputList';


const category = [
    {
        id: 1,
        sub:'Physics'
    },
    {
        id: 2,
        sub:'Chemistry'
    },
    {
        id: 3,
        sub:'Math'
    },
    {
        id: 4,
        sub:'Biology'
    },
    {
        id: 5,
        sub:'ICT'
    },
    {
        id: 6,
        sub:'Books'
    },
]

export default function PostScreen() {
    const scrollView = useRef()

    const [visible, setVisible] = useState(false)
    const [linkVisible, setLinkVisible] = useState(false)
    const [bold, isBold] = useState(false)
    const [italic, isItalic] = useState(false)
    const [link,setLink]=useState('')

    const handleSubmit = (listing) => {
        console.log(listing.body)
    }

    return (
        <Screen>
            <View style={{ flexDirection: 'row', marginTop:10,backgroundColor:'rgba(0, 255, 64,0.2)',padding:10,paddingLeft:20}}>
            <Image
            source={require('../../assets/askme.png')}
            style={{width:36,height:34}}
            />
            <Text style={{ paddingTop: 2,fontSize: 20, marginLeft: 5, color: 'black',fontStyle:'italic' }}>Ask</Text>
                <Text style={{ paddingTop: 10, fontSize: 12, color: 'green', fontStyle: 'italic' }}>me</Text>
                <Text style={{ marginLeft: 185, textAlign: 'center', color: 'white', backgroundColor:'green',padding:6}}>How to ask</Text>
            </View>
            <ScrollView>
            <Text style={{ margin: 20, fontSize: 20 }}>Ask a public question</Text>
            <Formik
                initialValues={{ title: '',body:'',category:null,images:[] }}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue, handleSubmit, values }) => (
                    <>
                        <TouchableOpacity style={{ flexDirection: 'row', borderWidth: 1, width:'42%',marginLeft:20,padding:5,marginBottom:10}} onPress={()=>visible?setVisible(false): setVisible(true)}>
                            <AntDesign name="appstore1" size={26} color="black" />
                            <Text
                                style={{ fontSize: 18, textAlign: 'center', paddingBottom:2,width:'63%',marginRight:7}}
                            >{ values['category']?values['category']:'Category'}</Text>
                            <AntDesign name="arrowright" size={25} color="black" style={{backgroundColor:'rgba(0, 255, 64,0.5)'}} />
                            </TouchableOpacity>
                            {visible &&
                                <View style={{ borderWidth: 1, width: 100, position: 'absolute', marginTop: 66, marginLeft: 186, backgroundColor: 'white', zIndex: 9 }}>
                                {category.map((item, index) =>
                                    <Text
                                        key={index}
                                        style={{ textAlign: 'center', borderBottomWidth: 2,fontSize:14 }}
                                        onPress={() => {
                                            setFieldValue('category',item.sub)
                                            setVisible(false)
                                        }}
                                    >{item.sub}</Text>)}
                                    </View>
                            }
                            <Text style={{ fontSize: 20, marginLeft: 20, marginBottom: 5 }}>Title</Text>
                            <Text style={{marginLeft:20,marginBottom:5}}>Be specific and imagine you’re asking a question to another person</Text>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            name="title"
                            onChangeText={text => setFieldValue('title', text)}
                            placeholder='e.g. How Gravity works in physics?'
                            value={values['title']}
                            selectTextOnFocus={false} 
                            style={{ borderWidth: 1, marginLeft: 20, marginRight:8,paddingLeft:10,padding:5,fontSize:18,marginBottom:8}}
                        />
                        <Text style={{ fontSize: 20, marginLeft: 20, marginBottom: 5 }}>Body</Text>
                            <Text style={{ marginLeft: 20, marginBottom: 5 }}>Include all the information someone would need to answer your question</Text>
                            <View style={{ borderWidth: 1, marginLeft: 20, marginRight: 8 }}>
                                <View style={{flexDirection:'row',borderWidth:1,padding:5}}>
                                    <MaterialIcons name="format-bold" size={26} color={bold ? 'green':'black'} onPress={()=>bold?isBold(false): isBold(true)} />
                                    <MaterialIcons name="format-italic" size={26} color={italic ? 'green':'black'} style={{marginLeft:7}}  onPress={()=>italic?isItalic(false): isItalic(true)}/>
                                    <Feather name="link" size={23} color="black" style={{ marginLeft: 15 }} onPress={() => setLinkVisible(true)} />
                                    <ImageInputList name='images' />
                                    
                                    <FontAwesome name="file-code-o" size={24} color="black" style={{ marginLeft: 17 }}  />
                                    <MaterialIcons name="delete" size={25} color="black" style={{marginLeft:150}} onPress={()=>setFieldValue('body','')} />
                                </View>
                                
                                {linkVisible && 
                                    <View style={{borderWidth:1,position:'absolute',zIndex:3,marginTop:37,backgroundColor:'white',width:'100%'}}>
                                    <Text style={{padding:8,fontWeight:'bold'}}>Insert HyperLink</Text>
                                    <View style={{ marginBottom: 8, flexDirection: 'row' }}>
                                        <TextInput 
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            name='link'
                                            onChangeText={txt => setLink(txt)}
                                            value={link ? link : `https://`}
                                            width='67.5%'
                                            style={{borderWidth:1,paddingLeft:10,marginLeft:8,fontSize:15,paddingRight:2}}
                                        />
                                        <Text style={{ padding: 5, textAlign: 'center', borderWidth: 1, marginLeft: 6,color:'white',backgroundColor:'green' }} onPress={() => { setFieldValue('body', values['body'] +' ('+ link+')'); setLinkVisible(false); setLink(null)}}>Add Link</Text>
                                        <MaterialIcons name="close" size={25} color="black" style={{ marginLeft: 5 }} onPress={ ()=>setLinkVisible(false)}/>
                                    </View>
                                </View>
                                }
                                
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    value={values['body']}
                                    onChangeText={text => setFieldValue('body', text)}
                                    multiline={true}
                                    numberOfLines={6}
                                    style={[{ marginLeft: 5, marginRight: 8, paddingLeft: 6, padding: 5, fontSize: 18, textAlignVertical: "top" }, bold && { fontWeight: 'bold' },italic?{fontStyle:'italic'}:{fontStyle:'normal'}]}
                                />
                            </View>
                                {values['images'] &&
                                <ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current.scrollToEnd()} style={{ borderWidth: 1, marginLeft:20,marginRight:8,borderTopWidth:0}}>
                                {values['images'].map((Uri, key) =>
                                    <TouchableOpacity
                                        key={key}
                                        onPress={() =>
                                            Alert.alert("Delete", "Are you sure you want to delete this image", [
                                                { text: "Yes", onPress: () => setFieldValue('images', values['images'].filter(imageUri => imageUri !== Uri)) },
                                                {text:"No"}
                                            ])
                                        }
                                    >
                                        <Image
                                            source={{ uri: Uri }}
                                            style={styles.image}
                                             />
                                        </TouchableOpacity>
                                    )}
                                    </ScrollView>
                                }
                            <TouchableOpacity>
                                <Text style={{fontSize:18 ,margin:20,borderWidth:1,width:180,padding:8,textAlign:'center',color:'white',backgroundColor:'green'}} onPress={handleSubmit}>Post your question</Text>
                            </TouchableOpacity>
                            
                            
                    </>
                )}
                </Formik>
            </ScrollView>
           
        </Screen>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        margin: 4,
        marginLeft:7
    }
})
