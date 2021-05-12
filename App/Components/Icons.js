import React from 'react'
import { MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons'
import { Fontisto,SimpleLineIcons,Foundation,Ionicons } from '@expo/vector-icons';

export const PhyIcon = ({color}) => <Fontisto name="atom" size={20} color={color?color:'white'} />
export const ChemIcon = ({color}) => <SimpleLineIcons name="chemistry" size={20} color={color?color:'white'} />
export const MatIcon = ({color}) => <MaterialCommunityIcons name="math-compass" size={20} color={color?color:'white'} />
export const BioIcon = ({color}) => <Foundation name="trees" size={20} color={color?color:'white'} />
export const IctIcon = ({color}) => <Ionicons name="ios-laptop" size={20} color={color?color:'white'} />
export const BookIcon=({color})=><FontAwesome name="book" size={20} color={color?color:'white'}/>