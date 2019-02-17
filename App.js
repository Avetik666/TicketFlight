/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text, //Component to handle <Text> elements
  View  //Straightforward, handles <View>
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(){
    super()
    this.state ={}
    this.state.customeStyle={
      color:'red'
    }
    setInterval(()=>{
      if(this.state.customeStyle.color === 'red'){
      this.setState({
        customeStyle:{
          color:'green'
        }
        })
      } else {
      this.setState({
        customeStyle:{
          color:'red'
          }
        })
      }
      },700)

  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={[styles.welcome,this.state.customeStyle]}>
        Hello World!
        Dear Avetik your first steps are promising keep it in the same way.
        </Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'blue'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
