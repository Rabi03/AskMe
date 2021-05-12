import React,{useEffect} from 'react'
import { StyleSheet, Text, View,Image,ScrollView ,Button} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import {Entypo} from '@expo/vector-icons'
import { useFormikContext } from "formik";

export default function ImageInputList({ name}) {
    const { setFieldValue, values } = useFormikContext();
    const imageUris=values[name]
    async function requestPermission() {
        const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    
        if (!permissionResult.granted) {
    
          alert('Permission to access camera roll is required!');
    
        }
     }
      
      useEffect(() => {
        requestPermission()
      }, [])
    const handleImageSelect = async() => {
        try {
            const request = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality:0.5
            })
          if (!request.cancelled) setFieldValue(name, [...imageUris, request.uri])
        } catch (error) {
          console.log("Error reading Image",error)
        }
    }

    return (
        <>
            <Entypo name="image-inverted" size={25} color="black" style={{ marginLeft: 17 }} onPress={handleImageSelect} />
            
        </>
    )
}

const styles = StyleSheet.create({
})

