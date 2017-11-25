import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class PaymentScreen extends Component {
    static navigationOptions = {
        title: 'Payment',
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

export default PaymentScreen;