import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Common from '../constants/common';

export default class TransactionSingle extends React.Component {
  render() {
    return (
        <TouchableOpacity onPress={() => {this.props.handleClick('AccountScreen')}}>
            <View style={[Common.row, Common.listItem]}>
                <View style={{width: 60}}>
                    <Text style={Common.listLabel}>{this.props.transaction.amount}€</Text>
                </View>
                <View style={{width: 170}}>
                <Text style={Common.listLabel}>{this.props.transaction.debtorName || this.props.transaction.creditorName}</Text>
                </View>
                <Text style={[Common.listLabel, {alignSelf: 'flex-end'}]}>{this.props.transaction.bookingDate}</Text>
            </View>
        </TouchableOpacity>
    );
  }
}
