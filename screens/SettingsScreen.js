import React from 'react';
import {Text, View} from 'react-native';
import Common from '../constants/common';
import APITest from '../components/APITest';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    return (
      <View>
        <Text style={Common.h2}>Welcome to the real world</Text>
        <Text style={Common.bodyText}>All the information displayed here is retrieved from Nordea's API</Text>
        <APITest/>
      </View>
    )
  }
}
