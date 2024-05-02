import { StyleSheet, Text, View, Image, TouchableOpacity ,useWindowDimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";

const NewCollection = (p) => {

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const stack = p.navigation;
  
 

  return (
    <View style={{width:responsiveWidth(100), height:responsiveHeight(100), padding:responsiveWidth(1),}}>
        <View style={{flexDirection:'row', marginTop:responsiveHeight(5), justifyContent:'space-between'}}>
        <Text><Ionicons name="menu" size={40} color="black" /></Text>
        <Text  style={{ }}><Ionicons name="ios-notifications" size={40} color="black"/></Text>
        </View>

        <View><Text style={{fontSize:responsiveFontSize(3), fontWeight:500, marginLeft:responsiveWidth(2)}}>New Collection</Text></View>

        
        
    
        <LinearGradient colors={['black', 'gray']} 
        
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{ width:responsiveWidth(98), height:windowWidth>500 ? responsiveHeight(70): responsiveHeight(25), borderRadius:20,}}>

     <View>
        <Text style={{color:"white", paddingLeft:responsiveWidth(6), paddingTop:windowWidth>500 ? responsiveHeight(7):responsiveHeight(2), fontSize:responsiveFontSize(2), marginBottom:responsiveHeight(-2)}}>U P  T O</Text>
        <Text style={{color:"white",  paddingLeft:responsiveWidth(6), fontSize:responsiveFontSize(6), marginBottom:responsiveHeight(-3)}}>50%</Text>
        <Text style={{color:"white", paddingLeft:responsiveWidth(6), fontSize:responsiveFontSize(6)}}>O F F</Text>
        <View style={{backgroundColor:"white", width:responsiveWidth(40), height:windowWidth>500 ? responsiveHeight(6) :responsiveHeight(4), marginLeft:responsiveWidth(6), marginTop:windowWidth>500 ? responsiveHeight(6):responsiveHeight(1), borderRadius:50, alignItems:'center', justifyContent:"center"}}>
            <Text style={{fontWeight:800, fontSize:responsiveFontSize(2)}}>Sale-UP 50%</Text>
        </View>
      </View>
         <View style={{position:'absolute', paddingLeft:responsiveWidth(45)}}>
            <Text style={{color:'#343534', fontSize:responsiveFontSize(6), fontWeight:"bold", marginTop:responsiveHeight(1)}}>N  I  K  E</Text>
         </View>
         <Image style={{width:windowWidth>500 ? responsiveWidth(40): responsiveWidth(50), height:windowWidth>500 ? responsiveHeight(55): responsiveHeight(15), position:'absolute', marginLeft:windowWidth>500 ? responsiveWidth(50): responsiveWidth(45), marginTop:windowWidth>500 ? responsiveHeight(15):responsiveHeight(9)}}
      source={
        require('../../assets/34.png')
      }/>
        </LinearGradient>
     
     <SecondOne/>
     <SaleShoes stack={stack}/>
     
        </View>

    
   
  )
}

export default NewCollection


const styles = StyleSheet.create({})


function SecondOne(){
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
    return(
        <View>
        <View style={{height:responsiveHeight(5), marginBottom:responsiveHeight(1), flexDirection:'row', justifyContent:'space-between', marginEnd:responsiveWidth(2), marginLeft:responsiveWidth(2), marginTop:windowWidth>500 ? responsiveHeight(10):responsiveHeight(1), justifyContent:"space-between", alignItems:'center'  }}>
        <View style={{backgroundColor:"black", width:responsiveWidth(26), height:windowWidth>500 ? responsiveHeight(7): responsiveHeight(4), borderRadius:5, justifyContent:"space-between", justifyContent:"center", alignItems:'center', }}>
            <Text style={{fontSize:responsiveFontSize(2.5),  color:"white"}}>Popular</Text>
        </View>
        <View style={{ width:responsiveWidth(25), height:responsiveHeight(3), borderRadius:5, justifyContent:"space-between", justifyContent:"center", alignItems:'center'}}>
            <Text style={{fontSize:responsiveFontSize(2.5),  }}>Men</Text>
        </View>
        <View style={{ width:responsiveWidth(25), height:responsiveHeight(3), borderRadius:5, justifyContent:"space-between", justifyContent:"center", alignItems:'center'}}>
            <Text style={{fontSize:responsiveFontSize(2.5), }}>Women</Text>
        </View>
        <View style={{ width:responsiveWidth(25), height:responsiveHeight(3), borderRadius:5, justifyContent:"space-between", justifyContent:"center", alignItems:'center'}}>
            <Text style={{fontSize:responsiveFontSize(2.5), }}>Kids</Text>
        </View>
      </View>

      <View style={{ marginEnd:responsiveWidth(2),  height:responsiveHeight(2),marginBottom:responsiveHeight(4), marginTop:windowWidth>500 ? responsiveHeight(10): responsiveHeight(0)}}>
      <View style={{flexDirection:'row', paddingLeft:responsiveWidth(2),  width:responsiveWidth(97), height:responsiveHeight(3), borderRadius:5, justifyContent:"space-between", alignItems:'center'}}>
            <Text style={{fontSize:responsiveFontSize(2), fontWeight:'bold'}}>All</Text>
            <Text style={{fontSize:responsiveFontSize(2),}}>Originals</Text>
            <Text style={{fontSize:responsiveFontSize(2),}}>Life Style</Text>
            <Text style={{fontSize:responsiveFontSize(2),}}>Running</Text>
            <Text style={{fontSize:responsiveFontSize(2),}}>Tennis</Text>
            
        </View>

        <View style={{flexDirection:'row', alignItems:'center', }}>
        <View style={{height:windowWidth>500 ? responsiveHeight(5):responsiveHeight(0.5), width:windowWidth>500 ? responsiveWidth(10): responsiveWidth(10), backgroundColor:'black',borderWidth:2, marginLeft:responsiveWidth(1), justifyContent:'space-between'}}></View>
        <View style={{height:responsiveHeight(0.1), width:responsiveWidth(85), backgroundColor:'black',  marginEnd:10, marginEnd:40, justifyContent:'space-between'}}></View>
        </View>
        

      </View>
        </View>
    );
}


function SaleShoes(p){

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

 const stack= p.stack;

 function GotoAbout(){
  stack.navigate('about')
 }
    return(

       <View style={{flex:1,flexDirection:'row', marginTop:windowWidth>500 ? responsiveHeight(5): responsiveHeight(0)}}>
        <View style={{ flex:1,  width:responsiveWidth(100), height:responsiveHeight(60),  marginTop:responsiveHeight(-1) }}>

        <LinearGradient colors={['black', '#959896']}  start={{ x: 0, y: 0.1 }}
        end={{ x: 1, y: 0.5 }}
        style={{ width:responsiveWidth(48), height:windowWidth>500 ? responsiveHeight(90): responsiveHeight(26), borderRadius:20, }}>

        <Image style={{width:responsiveWidth(46), height:windowWidth>500 ? responsiveHeight(45):responsiveHeight(15), position:'absolute', marginLeft:responsiveWidth(4), marginTop:windowWidth>500 ? responsiveHeight(5):responsiveHeight(1)}}
      source={
        require('../../assets/10.png')
      }/>
      <Text style={{fontSize:responsiveFontSize(2.5), color:'white', justifyContent:'center', textAlign:'center', marginTop:windowWidth>500 ? responsiveHeight(50):responsiveHeight(15), fontWeight:500}}>Nike SuperRep</Text>
      <View style={{flexDirection:"row", justifyContent:"space-between", paddingEnd:responsiveWidth(2),  marginTop:windowWidth>500 ? responsiveHeight(15): responsiveHeight(-1)}}>
            <Text style={{fontSize:responsiveFontSize(2.5), color:'white', justifyContent:'center', marginTop:responsiveHeight(3), marginLeft:responsiveWidth(2), fontWeight:400}}>129$</Text> 
            <TouchableOpacity onPress={GotoAbout}>
            <View style={{ flexDirection:'row', backgroundColor:'black', height:windowWidth>500 ? responsiveHeight(10):responsiveHeight(5), width:responsiveWidth(25), borderRadius:10, justifyContent:'center', alignItems:'center', marginTop:responsiveHeight(2.5),}}>
            <Text style={{fontSize:responsiveFontSize(2.3), color:'white'}}>Shop now</Text>
           </View> 
            </TouchableOpacity>
            
     </View>   
            </LinearGradient> 



            <LinearGradient colors={['black', '#959896']}  start={{ x: 0, y: 0.1 }}
        end={{ x: 1, y: 0.5 }}
        style={{ width:responsiveWidth(48), height:windowWidth>500 ? responsiveHeight(90): responsiveHeight(26), borderRadius:20, marginTop:windowWidth>500 ? responsiveHeight(5): responsiveHeight(1) }}>

        <Image style={{width:responsiveWidth(44), height:windowWidth>500 ? responsiveHeight(45):responsiveHeight(15), position:'absolute', marginLeft:responsiveWidth(4), marginTop:windowWidth>500 ? responsiveHeight(5):responsiveHeight(1)}}
      source={
        require('../../assets/11.png')
      }/>
      <Text style={{fontSize:responsiveFontSize(2.5), color:'white', justifyContent:'center', textAlign:'center', marginTop:windowWidth>500 ? responsiveHeight(50):responsiveHeight(15), fontWeight:500}}>Nike SuperRep</Text>
      <View style={{flexDirection:"row", justifyContent:"space-between", paddingEnd:responsiveWidth(2),  marginTop:windowWidth>500 ? responsiveHeight(15): responsiveHeight(-1)}}>
            <Text style={{fontSize:responsiveFontSize(2.5), color:'white', justifyContent:'center', marginTop:responsiveHeight(3), marginLeft:responsiveWidth(2), fontWeight:400}}>129$</Text> 
            <TouchableOpacity onPress={GotoAbout}>
            <View style={{ flexDirection:'row', backgroundColor:'black', height:windowWidth>500 ? responsiveHeight(10):responsiveHeight(5), width:responsiveWidth(25), borderRadius:10, justifyContent:'center', alignItems:'center', marginTop:responsiveHeight(2.5),}}>
            <Text style={{fontSize:responsiveFontSize(2.3), color:'white'}}>Shop now</Text>
           </View> 
            </TouchableOpacity>
            
     </View>   
            </LinearGradient> 
        </View>




        <View style={{flex:1, width:responsiveWidth(100), height:responsiveHeight(100), marginTop:responsiveHeight(-1)}}>
        <LinearGradient colors={['black', '#959896']}  start={{ x: 0, y: 0.1 }}
        end={{ x: 1, y: 0.5 }}
        style={{ width:responsiveWidth(48), height:windowWidth>500 ? responsiveHeight(90): responsiveHeight(26), borderRadius:20, }}>

        <Image style={{width:responsiveWidth(44), height:windowWidth>500 ? responsiveHeight(45):responsiveHeight(15), position:'absolute', marginLeft:responsiveWidth(4), marginTop:windowWidth>500 ? responsiveHeight(5):responsiveHeight(1)}}
      source={
        require('../../assets/12.png')
      }/>
      <Text style={{fontSize:responsiveFontSize(2.5), color:'white', justifyContent:'center', textAlign:'center', marginTop:windowWidth>500 ? responsiveHeight(50):responsiveHeight(15), fontWeight:500}}>Nike SuperRep</Text>
      <View style={{flexDirection:"row", justifyContent:"space-between", paddingEnd:responsiveWidth(2),  marginTop:windowWidth>500 ? responsiveHeight(15): responsiveHeight(-1)}}>
            <Text style={{fontSize:responsiveFontSize(2.5), color:'white', justifyContent:'center', marginTop:responsiveHeight(3), marginLeft:responsiveWidth(2), fontWeight:400}}>129$</Text> 
            <TouchableOpacity onPress={GotoAbout}>
            <View style={{ flexDirection:'row', backgroundColor:'black', height:windowWidth>500 ? responsiveHeight(10):responsiveHeight(5), width:responsiveWidth(25), borderRadius:10, justifyContent:'center', alignItems:'center', marginTop:responsiveHeight(2.5),}}>
            <Text style={{fontSize:responsiveFontSize(2.3), color:'white'}}>Shop now</Text>
           </View> 
            </TouchableOpacity>
            
     </View>   
            </LinearGradient> 


            <LinearGradient colors={['black', '#959896']}  start={{ x: 0, y: 0.1 }}
        end={{ x: 1, y: 0.5 }}
        style={{ width:responsiveWidth(48), height:windowWidth>500 ? responsiveHeight(90): responsiveHeight(26), borderRadius:20, marginTop: windowWidth>500 ? responsiveHeight(5): responsiveHeight(1) }}>

        <Image style={{width:responsiveWidth(44), height:windowWidth>500 ? responsiveHeight(45):responsiveHeight(15), position:'absolute', marginLeft:responsiveWidth(4), marginTop:windowWidth>500 ? responsiveHeight(5):responsiveHeight(1)}}
      source={
        require('../../assets/13.png')
      }/>
      <Text style={{fontSize:responsiveFontSize(2.5), color:'white', justifyContent:'center', textAlign:'center', marginTop:windowWidth>500 ? responsiveHeight(50):responsiveHeight(15), fontWeight:500}}>Nike SuperRep</Text>
      <View style={{flexDirection:"row", justifyContent:"space-between", paddingEnd:responsiveWidth(2),  marginTop:windowWidth>500 ? responsiveHeight(15): responsiveHeight(-1)}}>
            <Text style={{fontSize:responsiveFontSize(2.5), color:'white', justifyContent:'center', marginTop:responsiveHeight(3), marginLeft:responsiveWidth(2), fontWeight:400}}>129$</Text> 
            <TouchableOpacity onPress={GotoAbout}>
            <View style={{ flexDirection:'row', backgroundColor:'black', height:windowWidth>500 ? responsiveHeight(10):responsiveHeight(5), width:responsiveWidth(25), borderRadius:10, justifyContent:'center', alignItems:'center', marginTop:responsiveHeight(2.5),}}>
            <Text style={{fontSize:responsiveFontSize(2.3), color:'white'}}>Shop now</Text>
           </View> 
            </TouchableOpacity>
            
     </View>   
            </LinearGradient> 




            
        </View>
       </View>
    );
}


