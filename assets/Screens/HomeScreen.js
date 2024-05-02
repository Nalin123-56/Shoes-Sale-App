import { StyleSheet, Text, View, Image, Button , useWindowDimensions, ImageBackground} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const HomeScreen = (p) => {

  

  function gotoCollection(){
    p.navigation.navigate('collection')
  }

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <View style={{flex:1, width:responsiveWidth(100), height:responsiveHeight(100), backgroundColor:"white" }}>
      <ImageBackground source={require('../../assets/15.png')} style={{height:windowWidth>500 ? responsiveHeight(200): responsiveHeight(60)}}>

        <View  style={{marginTop:windowWidth>500 ? responsiveHeight(60):responsiveHeight(20), alignItems:'center'} }>
        <Image style={{width:responsiveWidth(90), height:windowWidth>500 ? responsiveHeight(180): responsiveHeight(50),  }}
      source={
        require('../../assets/16.png')
      }resizeMode='cover'/>
        </View>
      
      </ImageBackground>


      <View style={{justifyContent:'center',opacity:10, alignItems:'center', marginTop:responsiveHeight(8),}}>
      <Text style={{fontSize:responsiveFontSize(4), color:'black', justifyContent:'center', fontWeight:700 }}>{'Imposible is'}</Text>
      <Text style={{fontSize:responsiveFontSize(4), color:'black', justifyContent:'center', fontWeight:700 }}>{'Possible with us'}</Text>
      </View>

      <View style={{justifyContent:'center', alignItems:'center', paddingTop:responsiveHeight(3)}}>
      <Text style={{fontSize:responsiveFontSize(2), color:'black', justifyContent:'center', fontWeight:700 }}>{'complete your style with the latest'}</Text>
      <Text style={{fontSize:responsiveFontSize(2), color:'black', justifyContent:'center', fontWeight:700 }}>{'shoes and sneakers'}</Text>
      </View>
      
      

        
        <View style={{marginTop:responsiveHeight(3), width:responsiveWidth(100), justifyContent:'center', alignItems:'center', height:responsiveHeight(10), borderRadius:15}}>
            <TouchableOpacity onPress={gotoCollection} style={{color:'black' , height:responsiveHeight(7), width:windowWidth>500 ? "30%": responsiveWidth(30), backgroundColor:'black', borderRadius:15, alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'white', fontSize:responsiveFontSize(2)}}>Get Start now</Text>
            </TouchableOpacity>
        </View>
    </View>

    
  )
}



export default HomeScreen

const styles = StyleSheet.create({})
