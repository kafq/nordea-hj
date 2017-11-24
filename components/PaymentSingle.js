import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default class PaymentSingle extends React.Component {
  render() {
    return (
        <View>
            <Text>Creditor: {this.props.creditorAccount}</Text>
            <Text>Message: {this.props.message}</Text>
            <Text>Amount: {this.props.amount}</Text>
            <Text>Name: {this.props.name}</Text>
            <Text>Status: {this.props.paymentStatus}</Text>
        </View>
    );
  }
}
