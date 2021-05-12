import React,{useState,useRef} from 'react'
import { StyleSheet, Text, View,Image, TextInput, Alert,TouchableOpacity,ScrollView } from 'react-native'
import { Formik } from 'formik'
import { MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';
import ImageInputList from '../ImageInputList'

export default function PostAnswerForm() {
    const scrollView = useRef()

    const [linkVisible, setLinkVisible] = useState(false)
    const [bold, isBold] = useState(false)
    const [italic, isItalic] = useState(false)
    const [link, setLink] = useState('')
    
    const handleSubmit = (listing) => {
        alert(listing.des)
    }
    return (
            <View style={{marginTop:10}}>
            <Formik
                initialValues={{ des:'',Ansimages:[] }}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue, handleSubmit, values }) => (
                    <>
                        <Text style={{ fontSize: 20, marginLeft: 20, marginBottom: 5 }}>Your Answer</Text>
                            <View style={{ borderWidth: 1, marginLeft: 20, marginRight: 8 }}>
                                <View style={{flexDirection:'row',borderWidth:1,padding:5}}>
                                    <MaterialIcons name="format-bold" size={26} color={bold ? 'green':'black'} onPress={()=>bold?isBold(false): isBold(true)} />
                                    <MaterialIcons name="format-italic" size={26} color={italic ? 'green':'black'} style={{marginLeft:7}}  onPress={()=>italic?isItalic(false): isItalic(true)}/>
                                <Feather name="link" size={23} color="black" style={{ marginLeft: 15 }} onPress={() => setLinkVisible(true)} />
                                <ImageInputList name='Ansimages'/>
                                    
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
                                        <Text style={{ padding: 5, textAlign: 'center', borderWidth: 1, marginLeft: 6,color:'white',backgroundColor:'green' }} onPress={() => { setFieldValue('des', values['des'] +' ('+ link+')'); setLinkVisible(false); setLink(null)}}>Add Link</Text>
                                        <MaterialIcons name="close" size={25} color="black" style={{ marginLeft: 5 }} onPress={ ()=>setLinkVisible(false)}/>
                                    </View>
                                </View>
                                }
                                
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    value={values['des']}
                                    onChangeText={text => setFieldValue('des', text)}
                                    multiline={true}
                                    numberOfLines={6}
                                    style={[{ marginLeft: 5, marginRight: 8, paddingLeft: 6, padding: 5, fontSize: 18, textAlignVertical: "top" }, bold && { fontWeight: 'bold' },italic?{fontStyle:'italic'}:{fontStyle:'normal'}]}
                                />
                        </View>
                                {values['Ansimages'] &&
                                <ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current.scrollToEnd()} style={{ borderWidth: 1, marginLeft:20,marginRight:8,borderTopWidth:0}}>
                                {values['Ansimages'].map((Uri, key) =>
                                    <TouchableOpacity
                                        key={key}
                                        onPress={() =>
                                            Alert.alert("Delete", "Are you sure you want to delete this image", [
                                                { text: "Yes", onPress: () => setFieldValue('Ansimages', values['Ansimages'].filter(imageUri => imageUri !== Uri)) },
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
                                <Text style={{fontSize:18 ,margin:20,borderWidth:1,width:180,padding:8,textAlign:'center',color:'white',backgroundColor:'green'}} onPress={handleSubmit}>Post Your Answer</Text>
                            </TouchableOpacity>
                            
                            
                    </>
                )}
            </Formik>
            </View>
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
