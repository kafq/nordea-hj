import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class AccountScreen extends Component {
  static navigationOptions = {
    title: 'Account',
  };
  render() {
    const { params } = this.props.navigation.state
    return (
        <View>
            <Text>{params.type}</Text>
      </View>
    );
  }
}

export default AccountScreen;