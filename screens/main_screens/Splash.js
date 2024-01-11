import React from 'react'
import COLORS from '../../constants/colors';
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View ,Image } from 'react-native'


const Splash = ({navigation}) => {

    setTimeout(()=>{
        navigation.replace('Landing')
    },4000)
    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.black, COLORS.black]}
        >
            <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
                <Image source={require('../../assets/splashicon.png')} style={{width:150,height:150}}  />    
            </View>
        </LinearGradient>
        
    )
}

export default Splash

const styles = StyleSheet.create({})