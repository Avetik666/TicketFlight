import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    TouchableOpacity,
    Image
} from 'react-native';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';


class Home extends Component {
 render(){
   return (
           <View style={styles.container}>
           <Text style={styles.welcome}>This is Home component</Text>
           <Button onPress={() => this.props.navigation.navigate('LogIn')} title = 'Go to LogIn'></Button>
           </View>
         );
     }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    welcome:{
      fontSize: 20,
      textAlign: 'left',
      margin: 10
    },
    firstPage:{
      fontSize: 20,
      textAlign: 'left',
      margin: 10
    }
});


export default Home
