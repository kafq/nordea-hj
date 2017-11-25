import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

export default class AccountSingle extends React.Component {
  render() {
    return (
        <TouchableOpacity onPress={() => {this.props.handleClick('AccountScreen')}}>
            <View>
                <Text>{this.props.accountNumber}</Text>
                <Text>{this.props.availableBalance}</Text>
                <Text>{this.props.ownerName}</Text>
            </View>
        </TouchableOpacity>
    );
  }
}
