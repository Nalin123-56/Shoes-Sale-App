import { StyleSheet, Text, View, Image, Button, TouchableOpacity, useWindowDimensions } from 'react-native'
import React from 'react'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { ScrollView } from 'react-native';

const BuyScreen = () => {

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    
    <View style={{flex:1, backgroundColor:'black',}}>
      
      <View style={{ backgroundColor:'black', height:windowWidth>500 ? responsiveHeight(100): responsiveHeight(40), width:responsiveWidth(100)}}>
    <Image style={{width:responsiveWidth(100), height:windowWidth>500 ? responsiveHeight(100): responsiveHeight(40),}}
      source={
        require('../../assets/33.png')
      }resizeMode='contain'/>
      <View>
      </View>
      </View>
      
        

      <View style={{paddingLeft:responsiveWidth(2), paddingEnd:responsiveWidth(2), paddingTop:responsiveHeight(2), backgroundColor:'white', width:responsiveWidth(100), height:responsiveHeight(100), borderRadius:30, }}> 
        <View style={{flexDirection:'row', justifyContent:'space-between'}} >
            <Text style={{fontSize:responsiveFontSize(3), fontWeight:700}}>Nike SuperRep</Text>
            <Text style={{fontSize:responsiveFontSize(3), fontWeight:700}}>129$</Text>
        </View>
        <Text style={{fontSize:responsiveFontSize(2), paddingBottom:5, color:"gray",}}>White Tennis Shoes</Text>



        <View style={{flexDirection:'row', marginTop:responsiveHeight(5), alignItems:'center', justifyContent:'space-between'}}>
        <Text style={{fontSize:responsiveFontSize(3), fontWeight:700, justifyContent:'center', alignItems:'center'}}>Size</Text>
        <View style={{backgroundColor:'black', width:responsiveWidth(15), height:responsiveHeight(6), justifyContent:'center', alignItems:'center', borderRadius:10,}}>
            <Text style={{color:'white', fontSize:responsiveFontSize(2)}}>38</Text>
        </View>
        <View style={{backgroundColor:'white', borderWidth:1, width:responsiveWidth(12), height:responsiveHeight(6), justifyContent:'center', alignItems:'center', borderRadius:10, marginLeft:10}}>
            <Text style={{color:'black', fontSize:responsiveFontSize(2)}}>40</Text>
        </View>
        <View style={{backgroundColor:'white', borderWidth:1, width:responsiveWidth(12), height:responsiveHeight(6), justifyContent:'center', alignItems:'center', borderRadius:10, marginLeft:10}}>
            <Text style={{color:'black', fontSize:responsiveFontSize(2)}}>42</Text>
        </View>
        <View style={{backgroundColor:'white', borderWidth:1, width:responsiveWidth(12), height:responsiveHeight(6), justifyContent:'center', alignItems:'center', borderRadius:10, marginLeft:10}}>
            <Text style={{color:'black', fontSize:responsiveFontSize(2)}}>43</Text>
        </View>
        <View style={{backgroundColor:'white', borderWidth:1, width:responsiveWidth(12), height:responsiveHeight(6), justifyContent:'center', alignItems:'center', borderRadius:10, marginLeft:10}}>
            <Text style={{color:'black', fontSize:responsiveFontSize(2)}}>44</Text>
        </View>
        </View>


        <View style={{ marginTop:responsiveHeight(3),justifyContent:'center'}}>
            <Text style={{fontSize:responsiveFontSize(3), fontWeight:600, marginTop:responsiveHeight(2), }}>{'Description'}</Text>
            <Text style={{fontSize:responsiveFontSize(2), fontWeight:400, marginTop:responsiveHeight(1), }}>{'Experience unmatched comfort and style in our Nike shoes. Engineered with premium materials for durability and support, these shoes redefine fashion with lasting comfort for your every stride.'}</Text>
        </View>

        <View style={{ marginTop:responsiveHeight(5), alignItems:'center',justifyContent:'center' }}>
          <TouchableOpacity  style={{backgroundColor:"black", width:responsiveWidth(40), justifyContent:'center', alignItems:'center', height:responsiveHeight(7), borderRadius:10}}>
            <Text style={{color:"white", fontSize:responsiveFontSize(2), fontWeight:500 }}>Shop Now</Text>
          </TouchableOpacity>
            
        </View>

      </View>

      
    </View>
     

       
  )
}

export default BuyScreen

const styles = StyleSheet.create({})