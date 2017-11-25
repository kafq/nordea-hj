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
import _ from 'lodash';
import { WebBrowser, Font } from 'expo';

const mockData = [
{
_type: 'DebitTransaction',
amount: 12,
bookingDate: "2017-11-25",
creditorName: "Electricity Oy",
typeDescription: "Pano",
valueDate: "2017-11-25",
},
{
  _type: 'DebitTransaction',
  amount: 650,
  bookingDate: "2017-11-25",
  creditorName: "Rental Oy",
  transactionId: "0220161114520725",
  typeDescription: "Pano",
  valueDate: "2017-11-25",
},
{
  _type: 'DebitTransaction',
  amount: 12,
  bookingDate: "2017-10-22",
  creditorName: "Attorney Consultancy",
  transactionId: "0220161114520725",
  typeDescription: "Pano",
  valueDate: "2017-11-25",
},
{
    _type: 'DebitTransaction',
    amount: 12,
    bookingDate: "2017-10-25",
    creditorName: "Electricity Oy",
    typeDescription: "Pano",
    valueDate: "2017-10-25",
    },
    {
      _type: 'DebitTransaction',
      amount: 650,
      bookingDate: "2017-10-25",
      creditorName: "Rental Oy",
      transactionId: "0220161114520725",
      typeDescription: "Pano",
      valueDate: "2017-10-25",
      },
]
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
      recurrentSpendings: []
    }
  }

  async componentWillMount() {
    await Database.listAccounts((accounts) => {
        this.setState({accounts}, () => {
        })
    });
    Database.getAllPayments((payments) => {
        this.setState({payments}, () => {

        })
    });
    await Database.getAccountTransactions('FI6593857450293470-EUR', (transactions) => 
    {this.setState({transactions})});
    this.filterRecurrent(mockData)
  }
 viewPayment() {

 }
 viewAccount() {
  console.log('Trying to view account')
 }

checkIfRecurrent = (data, paymentName) => {
  let repetitions = []
  data.forEach((payment) => {
    let month = payment.valueDate.substring(5,7);
    let thisName = payment.creditorName;
    let day = payment.valueDate.substring(8,10);
    if (paymentName === thisName) {
      repetitions.push(month);
    }
  })
  if (repetitions.length > 1){
    console.log('repetetive')
    return true;
  }
  else {
    return false;
  }
}

filterRecurrent = (data) => {
  let filtered = data.filter((action) => {
      return this.checkIfRecurrent(data, action.creditorName)
    })
  console.log('______________')
  console.log(_.uniqBy(filtered, 'creditorName'))
  console.log('______________')
  
  this.setState({
    recurrentSpendings: _.uniqBy(filtered, 'creditorName')
  })
}
countMonthly(items){
  console.log(items);
  let sum = 0;
  items.forEach((item) => {
    sum += parseInt(item.amount)
  })
  return sum;
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
        <View>
          <Text>{this.countMonthly(this.state.recurrentSpendings)}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => {console.log(this.state.recurrentSpendings)}}><Text>Most popular transactions</Text></TouchableOpacity>
          <FlatList
            data={this.state.recurrentSpendings}
            renderItem={({item}) => (
            <View>
             <Text>{item.creditorName}</Text>
             <Text>{item.amount}</Text>
             </View>
            )}/>
        </View>
        <View style={[Common.container, {paddingHorizontal: 24}]}>
            <Text style={Common.h2}>Transactions</Text>
            <Text/>
            <FlatList
            data={mockData}
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