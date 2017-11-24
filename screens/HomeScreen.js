import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import APITest from '../components/APITest';
import Accounts from '../components/Accounts';
import Database from '../api/database';
import { WebBrowser } from 'expo';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  constructor(props) {
    super(props);
    this.state = {
      accounts: []
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
  render() {
    return (
      <View style={{paddingTop: 24}}>
        <APITest/>
        <Accounts accounts={this.state.accounts}/>
      </View>
    );
  }
}