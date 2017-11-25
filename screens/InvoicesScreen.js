import React, { Component } from "react";
import { View, Text, FlatList, } from "react-native";
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
  handleClick() {
      console.log('12345')
  }
  render() {
    const { params } = this.props.navigation.state
    return (

            <View style={[Common.container, {paddingHorizontal: 24}]}>
                <Text style={Common.h2}>Invoices</Text>
                <Label
                    title={'Totally'}
                    value={mockData.length}/>
                <FlatList
                data={this.retrieveInvoices()}
                renderItem={({item}) => 
                (<TransactionSingle
                    transaction={item}
                    handleClick={this.handleClick.bind(this)}/>)}/>
            </View>
    );
  }
}

export default InvoicesScreen;