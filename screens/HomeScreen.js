import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StatusBar,
} from 'react-native';
import APITest from '../components/APITest';
import AccountSingle from '../components/AccountSingle';
import PaymentSingle from '../components/PaymentSingle';
import TransactionSingle from '../components/TransactionSingle';
import Database from '../api/database';
import Common from '../constants/common';
import Colors from '../constants/Colors';
import Typography from '../constants/Typography';

import { WebBrowser, Font } from 'expo';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: (<Text 
      style={{color: '#fff', 
              fontFamily: Typography.titleFont,
              fontSize: 18}}>Home</Text>),
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
  };
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      payments: [],
      transactions: [],
    }
  }
  async componentWillMount() {
    await Database.listAccounts((accounts) => {
        this.setState({accounts}, () => {
            console.log('Done');
            console.log(this.state.accounts);
        })
    });
    Database.getAllPayments((payments) => {
        this.setState({payments}, () => {
            console.log('Done');
            console.log(this.state.payments)
        })
    });
    await Database.getAccountTransactions('FI6593857450293470-EUR', (transactions) => 
    {this.setState({transactions})});
  }
 viewPayment() {

 }
 viewAccount() {
  console.log('Trying to view account')
 }

 handleClick(screen) {
  this.props.navigation.navigate(screen, {type: 'test'})
}
  render() {
    return (
      <ScrollView style={Common.section}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <View style={[Common.badgeContainer, Common.extraBottomMargin]}>
          <Text style={[Common.h2, Common.whiteText]}>Accounts</Text>
          <FlatList 
            style={Common.accountsContainer}
            horizontal
            data={this.state.accounts}
            renderItem={({item})=>
              (<AccountSingle
                  account={item}
                  onViewAccount={this.viewAccount}
                  accountNumber={item.accountNumber.value}
                  availableBalance={item.availableBalance}
                  ownerName={item.ownerName}
                  handleClick={this.handleClick.bind(this)}/>)}
          />
        </View>
        
        <View style={[Common.container, {paddingHorizontal: 24}]}>
            <Text style={Common.h2}>Transactions</Text>
            <Text/>
            <FlatList
            data={this.state.transactions}
            renderItem={({item}) => 
              (<TransactionSingle
                  transaction={item}
                  handleClick={this.handleClick.bind(this)}/>)}/>
        </View>
        <View style={Common.section}>
          <APITest/>
          <Text>Your payments</Text>
          <FlatList
            data={this.state.payments}
            renderItem={({item}) => 
              (<PaymentSingle
                  creditorAccount={item.creditor.account.value}
                  message={item.message}
                  amount={item.amount}
                  name={item.creditor.name}
                  paymentStatus={item.paymentStatus}
                  handleClick={this.handleClick.bind(this)}/>)}/>
        </View>
      </ScrollView>
    );
  }
}