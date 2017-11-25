import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Common from '../constants/common';

export default class PaymentSingle extends React.Component {
  render() {
    return (
        <View style={this.props.style}>
          <Text style={Common.labelTitle}>{this.props.title}</Text>
          <Text style={Common.labelValue}>{this.props.value}</Text>          
        </View>
    );
  }
}
