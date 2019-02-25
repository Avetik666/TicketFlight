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
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';
import { logger } from 'react-native-logger';
export default class App extends Component {
    constructor(){
        super();
    }

    render() {
      let rows =[]
      let nums =[[1,2,3],[4,5,6],[7,8,9],[0,0,'=']]
      for(let i = 0; i < 4; i++) {
        let row = [];
        for(let j = 0; j < 3; j++) {
          row.push(<TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>{nums[i][j]}</Text>
            </TouchableOpacity>);
        }
        rows.push(<View style={styles.row}>{row}</View>);
      }

      let operations = ['+', '-', '*', '/']
      let ops = []
      for(let i = 0; i < 4; i++){
        ops.push(<TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>{operations[i]}</Text>
          </TouchableOpacity>)
      }
        return (
          <View style={styles.container}>
                <View style={styles.result}>
                    <Text style={styles.resultText}>11x11</Text>
                </View>
                <View style={styles.calculation}>
                    <Text style={styles.calculationText}>123</Text>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.numbers}>
                        {rows}
                    </View>
                    <View style={styles.operations}>
                      {ops}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    resultText:{
        fontSize:40,
        color:'white'
    },
    calculationText:{
        fontSize:32,
        color:'white'
    },
    row:{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems:'center'
    },
    result: {
        flex: 2,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems:'flex-end'
    },
    calculation: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems:'flex-end'
    },
    buttons: {
        flexGrow: 7,
        flexDirection:'row'
    },
    numbers: {
        flex:3,
        backgroundColor: 'yellow'
    },
    btn:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: 'purple'
    },
    btnText:{
      fontSize:35
    },
    operations: {
        flex:1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        backgroundColor: 'black'
    }
});
