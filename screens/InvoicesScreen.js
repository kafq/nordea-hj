import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Typography from '../constants/Typography';
import Colors from '../constants/Colors';
import Database from '../api/database';

class InvoicesScreen extends Component {
    static navigationOptions =  {
        headerTitle: (<Text 
        style={{color: '#fff', 
                fontFamily: Typography.titleFont,
                fontSize: 18}}>Invoices</Text>),
      headerStyle: {
        backgroundColor: Colors.tintColor,
        shadowOpacity: 0.4,
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowRadius: 6,
      },
      headerTitleStyle: {
        fontFamily: 'montserrat-bold',
        fontSize: 18,
        color: '#fff'
      }
    }
    constructor(props){
        super(props);
        this.state = {
            transactions: []
        }
    }
  componentWillMount() {
    await Database.getAccountTransactions('FI6593857450293470-EUR', (transactions) => 
    {this.setState({transactions})});
  }
  render() {
    const { params } = this.props.navigation.state
    return (
        <View>
            <Text>{params.type}</Text>
      </View>
    );
  }
}

export default InvoicesScreen;