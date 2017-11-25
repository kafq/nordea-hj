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
} from 'react-native';
import APITest from '../components/APITest';
import AccountSingle from '../components/AccountSingle';
import PaymentSingle from '../components/PaymentSingle';
import Database from '../api/database';
import Common from '../constants/common';
import { WebBrowser, Font } from 'expo';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      payments: []
    }
  }
  componentWillMount() {
    Database.listAccounts((accounts) => {
        this.setState({accounts}, () => {
            console.log('Done');
            console.log(this.state.accounts);
        })
    })
    Database.getAllPayments((payments) => {
        this.setState({payments}, () => {
            console.log('Done');
            console.log(this.state.payments)
        })
    })
 }
 viewPayment() {

 }
 viewAccount() {
  console.log('Trying to view account')
 }
  render() {
    return (
      <View style={{paddingTop: 24}}>
        <APITest/>
        <Text/>
        <Text style={Common.h1}>Accounts</Text>
        <FlatList 
          horizontal
          data={this.state.accounts}
          renderItem={({item})=>
            (<AccountSingle
                onViewAccount={this.viewAccount}
                accountNumber={item.accountNumber.value}
                availableBalance={item.availableBalance}
                ownerName={item.ownerName}/>)}
        />
        <Text/>
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
                />)}/>
      </View>
    );
  }
}