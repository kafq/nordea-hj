import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Typography from '../constants/Typography';
import Colors from '../constants/Colors';
import Common from '../constants/common';
import Database from '../api/database';
import mockData from '../constants/data';
import Label from '../components/Label';
import TransactionSingle from '../components/TransactionSingle'

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
  async componentWillMount() {
    await Database.getAccountTransactions('FI6593857450293470-EUR', (transactions) => 
    {this.setState({transactions})});
  }
  retrieveInvoices() {
      let invoices = mockData.filter((item) => {
          return item.amount > 0
      }) 
      return invoices;
  }
  navigate(screen) {
      this.props.navigation.navigate(screen, { type: "test" });
  }
  render() {
    const { params } = this.props.navigation.state
    return (

            <View style={[Common.container, {paddingHorizontal: 24}]}>
                <Text/>
                <Text style={Common.h2}>Invoices</Text>
                <Text style={Common.bodyText}>Below is the list of invoices you have sent to your clients. You can send more invoices, estimated payment date will affect the analysis of your company revenue</Text>
                <Text/>
                <Label
                    style={{marginBottom: 12}}
                    title={'Totally'}
                    value={mockData.length}/>
                <TouchableOpacity style={Common.button} onPress={() => {this.navigate('SendInvoiceScreen')}}><Text style={Common.buttonText}>Send invoice</Text></TouchableOpacity>
                <FlatList
                data={this.retrieveInvoices()}
                renderItem={({item}) => 
                (<TransactionSingle
                    transaction={item}
                    handleClick={this.navigate.bind(this)}/>)}/>
            </View>
    );
  }
}

export default InvoicesScreen;