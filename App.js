/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    CheckBox,
    View,
    Button,
    TouchableOpacity,
    Image
} from 'react-native';
// import { CheckBox } from 'react-native-elements';
import { logger } from 'react-native-logger';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
 // = createStackNavigator({...});
const img = './app/assets/images.png';
class Test extends Component {
 render(){
   return (
           <View style={styles.container}>
           <Text style={styles.welcome}>This is Test component</Text>
           <Button onPress={() => this.props.navigation.navigate('Home')} title = 'Go to Home'></Button>
           </View>
         );
     }
}

class Home extends Component {
 render(){
   return (
           <View style={styles.container}>
             <Image source={require(img) }/>
             <Text style={styles.welcome}>TicketFlight</Text>
             <TextInput style ={{fontSize:20} } placeholder = "Flight number" />
             <CheckBox title = 'Passenger' />
             <Button onPress={() => this.props.navigation.navigate('Test')} title = 'Continue'></Button>
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


export default class App extends Component {
render(){
  return <AppContainer />;
    }
}


const MainNavigator = createStackNavigator ({
   Home: Home,
   Test: Test

  });
const AppContainer = createAppContainer(MainNavigator);



// constructor(){
//     super();
//     this.state = {
//       resultText: "",
//       output:''
//     };
//     this.operations = ['DEL', '/', '*', '+', '-'];
//
// }
//
// calculateResult(){
//   const result = this.state.resultText;
//   this.setState({
//     output:eval(result),
//     resultText: ''
//   });
// }
//
// buttonPressed(text){
//   console.log(text);
//   if(text === '='){
//     return this.calculateResult();
//   }
//   this.setState({
//     resultText: this.state.resultText + text
//   });
// }
//
// operate(operation){
//   switch(operation){
//     case 'DEL':
//       if(this.state.resultText === '') return
//       let text = this.state.resultText.split('');
//       text.pop();
//       this.setState({
//         resultText: text.join('')
//         });
//         break
//       case '/':
//       case '*':
//       case '+':
//       case '-':
//         const lastChar = this.state.resultText.split('').pop();
//         if(this.state.resultText === '' || this.operations.indexOf(lastChar) > 0 ) return
//         this.setState({
//           resultText: this.state.resultText + operation
//           })
//   }
// }
// validate() {
//   cons text =
// }
//
// render() {
//   let rows =[]
//   let nums =[[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
//   for(let i = 0; i < 4; i++) {
//     let row = [];
//     for(let j = 0; j < 3; j++) {
//       row.push(<TouchableOpacity onPress={() => this.buttonPressed(nums[i][j])} style={styles.btn}>
//           <Text style={styles.btnText}>{nums[i][j]}</Text>
//         </TouchableOpacity>);
//     }
//     rows.push(<View style={styles.row}>{row}</View>);
//   }
//
//   let ops = []
//   for(let i = 0; i < 5 ; i++){
//     ops.push(<TouchableOpacity style={styles.btn} onPress={() => this.operate(this.operations[i])}>
//       <Text style={styles.btnText}>{this.operations[i]}</Text>
//       </TouchableOpacity>)
//   }
// return (
//         <View style={styles.container}>
//               <View style={styles.result}>
//                   <Text style={styles.resultText}>{this.state.resultText}</Text>
//               </View>
//               <View style={styles.calculation}>
//                   <Text style={styles.calculationText}>{this.state.output}</Text>
//               </View>
//               <View style={styles.buttons}>
//                   <View style={styles.numbers}>
//                       {rows}
//                   </View>
//                   <View style={styles.operations}>
//                     {ops}
//                   </View>
//               </View>
//           </View>
//       );
//   }

// resultText:{
//     fontSize:40,
//     color:'white'
// },
// calculationText:{
//     fontSize:32,
//     color:'white'
// },
// row:{
//     flexDirection: 'row',
//     flex: 1,
//     justifyContent: 'space-around',
//     alignItems:'center'
// },
// result: {
//     flex: 2,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems:'flex-end'
// },
// calculation: {
//     flex: 1,
//     backgroundColor: 'green',
//     justifyContent: 'center',
//     alignItems:'flex-end'
// },
// buttons: {
//     flexGrow: 7,
//     flexDirection:'row'
// },
// numbers: {
//     flex:3,
//     backgroundColor: 'yellow'
// },
// btn:{
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'stretch'
//     // backgroundColor: 'purple'
// },
// btnText:{
//   fontSize:35
// },
// operations: {
//     flex:1,
//     justifyContent: 'space-around',
//     alignItems: 'stretch',
//     backgroundColor: 'gray'
// }
