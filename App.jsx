import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen}from './src/screen/HomeScreen.jsx';
import {LoginScreen}from './src/screen/LoginScreen.jsx';
import {SignupScreen}from './src/screen/SignupScreen.jsx';
import New from './src/screen/New.jsx';




const Stack = createNativeStackNavigator();

export class App extends PureComponent {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false,}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="New" component={New} />

  
  
  
       </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App