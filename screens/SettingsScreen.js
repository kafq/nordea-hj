import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import Common from '../constants/common';
import APITest from '../components/APITest';
import Typography from '../constants/Typography';
import Colors from '../constants/Colors';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Text
        style={{
          color: "#fff",
          fontFamily: Typography.titleFont,
          fontSize: 18
        }}
      >
        API Reference
      </Text>
    ),
    headerStyle: {
      backgroundColor: Colors.tintColor,
      shadowOpacity: 0.4,
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowRadius: 6
    },
    headerTitleStyle: {
      fontFamily: "montserrat-bold",
      fontSize: 18,
      color: "#fff"
    }
  };

  render() {
    return (
      <ScrollView style={Common.container}>
        <Text/>
        <Text style={Common.h2}>Welcome to the real world</Text>
        <Text/>
        <Text style={Common.bodyText}>Using mock data is pretty straightforward. This screen, however, shows that all the API functionalities are actually implemented, the only thing that is different from the actual execution is data.</Text>
        <Text/>
        <Text style={Common.bodyText}>All the information displayed here is retrieved from Nordea's API</Text>
        <Text/>
        <APITest/>
      </ScrollView>
    )
  }
}
