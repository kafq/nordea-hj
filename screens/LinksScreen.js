import React from 'react';
import { ScrollView, StyleSheet, WebView, Text } from 'react-native';
import Colors from '../constants/Colors';
import Typography from '../constants/Typography';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Text
        style={{
          color: "#fff",
          fontFamily: Typography.titleFont,
          fontSize: 18
        }}
      >
        on GitHub
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
      <WebView
        source={{uri: 'https://github.com/kafq/nordea-hj'}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
