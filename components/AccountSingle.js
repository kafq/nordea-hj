import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Common from '../constants/common';

export default class AccountSingle extends React.Component {
  render() {
    return (
        <TouchableOpacity style={Common.roundCornersMedium} onPress={() => {this.props.handleClick('AccountScreen')}}>
            <View style={[Common.accountSingle, Common.shadowSmall, Common.roundCornersMedium]}>
                <Text style={Common.h3}>{this.props.ownerName}</Text>
                {/* <Text>{this.props.accountNumber}</Text> */}
                <Text style={Common.bigNumber}>{this.props.availableBalance}</Text>
               
            </View>
        </TouchableOpacity>
    );
  }
}
