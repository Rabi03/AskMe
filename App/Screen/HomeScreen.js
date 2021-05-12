import { Formik } from 'formik'
import React, {useState } from 'react'
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons'
import { Image, StyleSheet, Text, TextInput, View,KeyboardAvoidingView } from 'react-native'
import Screen from '../Components/Screen'
import FilterButtons from '../Components/FilterButtons'
import ListItem from '../Components/ListItem'
import { ListContext } from '../Components/Context'

var listing = [
    {
        id: 1,
        name: 'Rabi Islam',
        image:'https://lh3.googleusercontent.com/GPC-DPV91Mp3j7-eFT8Tcs1DG9nZt3QZg7aXbYlhpuX4ec3U58UE8EcmUbCf1ZmnEc8',
        time: '5/25/2020 22:10:00',
        sub: 'Physics',
        Q: 'How Gravity works in physices?',
        ans: [
            {
                name: 'Zhalok Rahman',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU',
                time: '5/26/2020 10:26:34',
                answer: [
                    {
                        des: "Modern work on gravitational theory began with the work of Galileo Galilei in the late 16th and early 17th centuries. In his famous (though possibly apocryphal[11]) experiment dropping balls from the Tower of Pisa, and later with careful measurements of balls rolling down inclines, Galileo showed that gravitational acceleration is the same for all objects. This was a major departure from Aristotle's belief that heavier objects have a higher gravitational acceleration.[12] Galileo postulated air resistance as the reason that objects with less mass fall more slowly in an atmosphere. Galileo's work set the stage for the formulation of Newton's theory of gravity.For Details follow (https://en.wikipedia.org/wiki/Newton%27s_law_of_universal_gravitation)",
                        image: [
                            'https://astrokingrjkumar.files.wordpress.com/2014/03/13_gravitation1.jpg',
                            'https://i.ytimg.com/vi/pI47HsCNhjM/maxresdefault.jpg'
                        ],
                        like: 3,
                        comment: [
                            {
                                name: 'A.R Rahman',
                                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfa758-9Zet25uR43OnWUDxPh_5ivrKWg4g&usqp=CAU',
                                reply:'I want more information. Please message me on https://facebook.com.'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Fahad Rahman',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU',
                time: '5/26/2020 10:26:34',
                answer: [
                    {
                        des: "Modern work on gravitational theory began with the work of Galileo Galilei in the late 16th and early 17th centuries. In his famous (though possibly apocryphal[11]) experiment dropping balls from the Tower of Pisa, and later with careful measurements of balls rolling down inclines, Galileo showed that gravitational acceleration is the same for all objects. This was a major departure from Aristotle's belief that heavier objects have a higher gravitational acceleration.[12] Galileo postulated air resistance as the reason that objects with less mass fall more slowly in an atmosphere. Galileo's work set the stage for the formulation of Newton's theory of gravity.For Details follow (https://en.wikipedia.org/wiki/Newton%27s_law_of_universal_gravitation)",
                        image: [
                            'https://astrokingrjkumar.files.wordpress.com/2014/03/13_gravitation1.jpg',
                            'https://i.ytimg.com/vi/pI47HsCNhjM/maxresdefault.jpg'
                        ],
                        like: 3,
                        comment: [
                            {
                                name: 'kabir rahman',
                                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfa758-9Zet25uR43OnWUDxPh_5ivrKWg4g&usqp=CAU',
                                reply:'I want more info. Please message me on https://facebook.com.'
                            }
                        ]
                    }
                ]
            }
        ],
        view:48  
    },
    {
        id: 2,
        name: 'Rabi Islam',
        image:'https://lh3.googleusercontent.com/GPC-DPV91Mp3j7-eFT8Tcs1DG9nZt3QZg7aXbYlhpuX4ec3U58UE8EcmUbCf1ZmnEc8',
        time: '5/26/2020 22:10:00',
        sub: 'Chemistry',
        Q: 'How oil floats on water?',
        ans: [],
        view:48  
    },
    {
        id: 3,
        name: 'Rabi Islam',
        image:'https://lh3.googleusercontent.com/GPC-DPV91Mp3j7-eFT8Tcs1DG9nZt3QZg7aXbYlhpuX4ec3U58UE8EcmUbCf1ZmnEc8',
        time: '5/27/2020 22:10:00',
        sub: 'Math',
        Q: 'tanx+secx=cosx,how ?',
        ans: [],
        view:48  
    },
    {
        id: 4,
        name: 'Rabi Islam',
        image:'https://lh3.googleusercontent.com/GPC-DPV91Mp3j7-eFT8Tcs1DG9nZt3QZg7aXbYlhpuX4ec3U58UE8EcmUbCf1ZmnEc8',
        time: '5/28/2020 22:10:00',
        sub: 'Biology',
        Q: "What's the value of heart biting?",
        ans: [],
        view:48  
    }
]

export default function HomeScreen({navigation}) {
    const [filterText, setFilterText] = useState('All')
    const [list, setList] = useState(listing)

    const handleSubmit = (listing, { resetForm }) => {
        resetForm()
    }

    return (
        <Screen>
            <ListContext.Provider value={{list,setList,filterText, setFilterText}}>
            <View style={{ backgroundColor: 'rgba(0, 255, 64,0.2)',borderBottomLeftRadius:20,borderBottomRightRadius:10}}>
            <View style={{ flexDirection: 'row', marginTop:10,justifyContent:'center'}}>
            <Image
            source={require('../../assets/askme.png')}
            style={{width:36,height:34}}
            />
            <Text style={{ paddingTop: 2,fontSize: 20, marginLeft: 5, color: 'black',fontStyle:'italic' }}>Ask</Text>
            <Text style={{ paddingTop: 10, fontSize: 12, color: 'green',fontStyle:'italic' }}>me</Text>
            </View>
            <Formik
                initialValues={{ find: '' }}
                onSubmit={handleSubmit}
            >
                    {({setFieldValue,handleSubmit,values})=>(
                    <View style={styles.search}>
                        <TextInput 
                            selectTextOnFocus={true}
                            maxLength={50}
                            autoCapitalize="none"
                            autoCorrect={false}
                            name="Find"
                            onChangeText={text => setFieldValue('find', text)}
                            value={values['find']}
                            style={[{ color: 'black', fontSize: 19, width: '85%', padding: 7 }]}
                            placeholder='🔍 Find your question.....'
                        />
                        <MaterialCommunityIcons name="magnify" size={27} color="black" onPress={handleSubmit} style={styles.searchIcon} />
                    </View>
                )}

            </Formik>
            <Text style={{ fontSize:20,marginTop:10,marginLeft:10}}>Categories</Text>
            <FilterButtons prevList={listing} />
            </View>
            <View style={{flexDirection:'row',margin:10,marginBottom:1}}>
                <MaterialIcons name="question-answer" size={30} color="green" />
                    <Text style={{ fontSize: 20, marginLeft: 5, color: 'green' }}>{filterText}</Text>
            </View>
                <ListItem nav={navigation} />
                </ListContext.Provider>
            </Screen>
    )
}

const styles = StyleSheet.create({
    search: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: 'white',
        width: '90%',
        marginLeft: 20,
        alignItems: 'center',
        borderRadius:20
    },
    searchIcon: {
        alignItems: 'center',
        width: 35,
        height: 35,
        borderRadius: 17,
        backgroundColor: 'green',
        padding: 4.5,
        marginLeft: 5
    }
})
