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
import { logger } from 'react-native-logger';
import CheckBox from 'react-native-check-box';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import { registerToFlight } from '../../api/flights.api'

const img = '../../assets/images.png';
class LogIn extends Component {
  state = {
    flightId: ''
  };

  continueButtonClickedHandler = () => {
    const { flightId } = this.state;
    registerToFlight(flightId);
  };

 render(){
   return (
           <View style={styles.container}>
               <Image source={require(img) }/>
               <Text style={styles.welcome}>TicketFlight</Text>
               <TextInput style ={{fontSize:20} } placeholder = "Flight number" />
               <CheckBox
                  style={{padding: 10}}
                  leftText={"Passenger"}
               />
               <Button onPress={() => this.props.navigation.navigate('Home')} title = 'Continue'></Button>
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


export default LogIn
