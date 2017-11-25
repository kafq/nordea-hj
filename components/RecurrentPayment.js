import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Common from '../constants/common';

export default class RecurrentPayment extends React.Component {
  render() {
    return (
        <TouchableOpacity style={Common.roundCornersMedium}>
            <View style={[Common.recurrentSingle, Common.shadowSubtle, Common.roundCornersMedium]}>
                <Text style={Common.h3}>{this.props.payment.creditorName}</Text>
                <Text style={Common.bigNumber}>{this.props.payment.amount}€</Text>
               
            </View>
        </TouchableOpacity>
    );
  }
}