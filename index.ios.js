/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Button,
    Alert,
    View
} from 'react-native';

export default class gamechomp extends Component {

    cleanGrid(e) {
      Alert.alert(e.nativeEvent.target.toString());
      console.log(e.nativeEvent.target);
    }

    render() {
        return ( 
        
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={this.cleanGrid.bind(this)}>
              <View key={1} ref='myView' style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.cleanGrid.bind(this)}>
              <View key={2} ref='myView' style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            </TouchableOpacity>
            
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
          </View>            



        );
    }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
   
// });

AppRegistry.registerComponent('gamechomp', () => gamechomp);