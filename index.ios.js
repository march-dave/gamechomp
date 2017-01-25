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
      Alert.alert('e');
      console.log(e);
    }

    render() {
        return ( 
        
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={this.cleanGrid.bind(this)}>
              <View key={1} style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            </TouchableOpacity>
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
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