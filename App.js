import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import TransactionScreen from './screens/TransactionScreen';
import SearchScreen from './screens/SearchScreen';
import db from './config';
import * as firebase from 'firebase';
 
export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  )
  }
}

const tabNavigator=createBottomTabNavigator({
  TRANSACTION:{screen:TransactionScreen},
  SEARCH:{screen:SearchScreen}

},
{
defaultNavigationOptions : ({navigation})=>({
  tabBarIcon:()=>{const routeName=navigation.state.routeName
  if(routeName === "TRANSACTION"){
    return(
      <Image source={require("./assets/book.png")} style= {{width : 40,
      height: 40}}/>
    )
  }
  else if (routeName === "SEARCH"){
    return(
      <Image source={require("./assets/searchingbook.png")} style= {{width : 40,
      height: 40}}/>
    )
  }}}) 
});

const AppContainer=createAppContainer(tabNavigator)
