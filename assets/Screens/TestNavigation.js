import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen';
import BuyScreen from './BuyScreen';
import NewCollection from './NewCollection';


const Stack =  createStackNavigator();

const TestNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator 
    screenOptions={
        {
            headerShown: false,
        }
    }>
        <Stack.Screen name='home' component={HomeScreen}/>
        <Stack.Screen name='about' component={BuyScreen} options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}/>
         <Stack.Screen name='collection' component={NewCollection} options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}/>
        
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default TestNavigation