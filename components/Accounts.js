import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default class Accounts extends React.Component {
  render() {
    return (
        <View>
            <Text></Text>
            <FlatList
                data={this.props.accounts}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.accountNumber.value}</Text>
                        <Text>{item.availableBalance}</Text>
                        <Text>{item.ownerName}</Text>
                    </View>
                )}/>
        </View>
    );
  }
}
