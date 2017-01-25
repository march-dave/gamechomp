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

    constructor() {
      super();

      
    }

    cleanGrid() {
      Alert.alert('Click');
    }

    render() {
        return ( 
          <View style = { styles.container } >
              
            <Button title='click' onPress={this.cleanGrid.bind(this)} />

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
   
});

AppRegistry.registerComponent('gamechomp', () => gamechomp);