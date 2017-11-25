import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StatusBar
} from "react-native";
import APITest from "../components/APITest";
import mockData from "../constants/data";
import AccountSingle from "../components/AccountSingle";
import PaymentSingle from "../components/PaymentSingle";
import TransactionSingle from "../components/TransactionSingle";

import RecurrentPayment from "../components/RecurrentPayment";
import Database from "../api/database";
import Common from "../constants/common";
import Colors from "../constants/Colors";
import Typography from "../constants/Typography";

import Label from "../components/Label";
import _ from "lodash";
import { WebBrowser, Font } from "expo";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Text
        style={{
          color: "#fff",
          fontFamily: Typography.titleFont,
          fontSize: 18
        }}
      >
        Home
      </Text>
    ),
    headerStyle: {
      backgroundColor: Colors.tintColor,
      shadowOpacity: 0.4,
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowRadius: 6
    },
    headerTitleStyle: {
      fontFamily: "montserrat-bold",
      fontSize: 18,
      color: "#fff"
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      payments: [],
      transactions: [],
      recurrentSpendings: [],
      earnings: []
    };
  }

  async componentWillMount() {
    await Database.listAccounts(accounts => {
      this.setState({ accounts }, () => {});
    });
    Database.getAllPayments(payments => {
      this.setState({ payments }, () => {});
    });
    await Database.getAccountTransactions(
      "FI6593857450293470-EUR",
      transactions => {
        this.setState({ transactions });
      }
    );
    this.filterRecurrent(mockData);
    let timeout = setTimeout(() => {
      this.getEarnings(mockData);
    }, 500);
  }

  checkIfRecurrent = (data, paymentName) => {
    let repetitions = [];
    data.forEach(payment => {
      let month = payment.valueDate.substring(5, 7);
      let thisName = payment.creditorName;
      let day = payment.valueDate.substring(8, 10);
      if (paymentName === thisName && payment.amount < 0) {
        repetitions.push(month);
      }
    });
    if (repetitions.length > 1) {
      console.log("repetetive");
      return true;
    } else {
      return false;
    }
  };

  filterRecurrent = data => {
    let filtered = data.filter(action => {
      return this.checkIfRecurrent(data, action.creditorName);
    });
    this.setState({
      recurrentSpendings: _.uniqBy(filtered, "creditorName")
    });
  };

  getEarnings = operations => {
    let earnings = mockData.filter(item => {
      return item.amount > 0;
    });
    this.setState({ earnings });
  };

  countMonthly(items) {
    console.log(items);
    let sum = 0;
    items.forEach(item => {
      sum += parseInt(item.amount);
    });
    return sum;
  }

  handleClick(screen) {
    this.props.navigation.navigate(screen, { type: "test" });
  }

  renderTransactions() {
    let transactions = [];
    for (let i = 0; i < this.state.recurrentSpendings.length; i++) {
      let item = this.state.recurrentSpendings[i];
      transactions.push(<RecurrentPayment payment={item} />);
    }
    return transactions;
  }
  render() {
    return (
      <ScrollView style={Common.section}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View style={[Common.badgeContainer, { marginBottom: 80 }]}>
          <Text style={[Common.h2, Common.whiteText]}>Accounts</Text>
          <FlatList
            style={Common.accountsContainer}
            horizontal
            data={this.state.accounts}
            renderItem={({ item }) => (
              <AccountSingle
                account={item}
                onViewAccount={this.viewAccount}
                accountNumber={item.accountNumber.value}
                availableBalance={item.availableBalance}
                ownerName={item.ownerName}
                handleClick={this.handleClick.bind(this)}
              />
            )}
          />
        </View>

        <View style={[Common.container, { marginBottom: 36 }]}>
          <TouchableOpacity
            onPress={() => {
              console.log(this.state.recurrentSpendings);
            }}
          >
            <Text style={Common.h2}>Recurrent Spendings</Text>
          </TouchableOpacity>
          <Label
            style={{ marginBottom: 12 }}
            title={"THIS MONTH"}
            value={this.countMonthly(this.state.recurrentSpendings) + "€"}
          />
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {this.renderTransactions()}
          </View>
        </View>

        <View style={[Common.container, { marginBottom: 36 }]}>
          <Text style={Common.h2}>Invoices</Text>
          <FlatList
            data={this.state.earnings}
            renderItem={({ item }) => (
              <TransactionSingle
                transaction={item}
                handleClick={this.handleClick.bind(this)}
              />
            )}
          />
        </View>

        <View style={Common.container}>
          <View style={[Common.overviewContainer, Common.shadowSubtle]}>
            <Text style={Common.h2}>Revenue Overview</Text>
            <View style={[Common.row, { marginBottom: 16 }]}>
              <Label
                style={{ marginRight: 8 }}
                title="By the end of November"
                value="-240€"
              />
              <Label
                style={{ marginLeft: 8 }}
                title="In 30 days"
                value="+500€"
              />
            </View>
            <Text style={[Common.bodyText, { marginBottom: 12 }]}>
              You need to increase sales or send more bills by 30.11. Also, you
              can transfer money from Idalex account to cover expenses
            </Text>
            <View style={Common.row}>
              <TouchableOpacity
                onPress={() => {
                  this.handleClick("InvoicesScreen");
                }}
                style={[Common.button, { marginRight: 8 }]}
              >
                <Text style={Common.buttonText}>View Invoices</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[Common.button, { marginLeft: 8 }]}>
                <Text style={Common.buttonText}>Transfer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={[Common.container, { paddingHorizontal: 24 }]}>
          <Text style={Common.h2}>Transactions</Text>
          <FlatList
            data={mockData}
            renderItem={({ item }) => (
              <TransactionSingle
                transaction={item}
                handleClick={this.handleClick.bind(this)}
              />
            )}
          />
        </View>
        <View style={Common.section}>
          <APITest />
          <Text>Your payments</Text>
          <FlatList
            data={this.state.payments}
            renderItem={({ item }) => (
              <PaymentSingle
                creditorAccount={item.creditor.account.value}
                message={item.message}
                amount={item.amount + "€"}
                name={item.creditor.name}
                paymentStatus={item.paymentStatus}
                handleClick={this.handleClick.bind(this)}
              />
            )}
          />
        </View>
      </ScrollView>
    );
  }
}
