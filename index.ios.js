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

    GetGridInfo(e) {
      Alert.alert(e.nativeEvent.target.toString());
      console.log(e.nativeEvent);
    }

    render() {
        return (

          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={this.GetGridInfo.bind(this)}>
              <View key={1} ref='myView' style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            </TouchableOpacity>

            <TouchableOpacity onPress={ (event) => console.log(event) }>
              <View key={2} style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.GetGridInfo.bind(this)}>
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.GetGridInfo.bind(this)}>
              <View style={{width: 0, height: 0, backgroundColor: 'red'}} />
            </TouchableOpacity>
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
