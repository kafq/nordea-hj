import React from 'react';
import { View, Text, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import Database from '../api/database';

export default class APITest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            assets: {},
            accounts: [],
            payments: [],
            recurrentTransactions: []
        }
    }
    getAccountInfo = () => {
       Database.listUserAssets((assets) => {
           this.setState({
               assets
           })
       })
    }
    componentWillMount() {
        Database.listAccounts((accounts) => {
            this.setState({accounts}, () => {
                console.log('Done');
            })
        })
        Database.getAllPayments((payments) => {
            this.setState({payments}, () => {
                console.log('Done');
            })
        })
    }
    
  render() {
    return (<View>
        <Text>Quick API Shortcuts</Text>

        <TouchableOpacity onPress={() => {this.getAccountInfo()}}>
            <Text>getAccountInfo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {Database.listAccounts((accounts) => {console.log('1234')})}}>
            <Text>List accounts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {Database.getAccountDetailsById(this.state.accounts[0]._id)}}>
            <Text>List account details by id</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {Database.getAccountTransactions(this.state.accounts[0]._id)}}>
            <Text>List account transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {Database.getAllPayments()}}>
            <Text>Get all payments</Text>
        </TouchableOpacity>
    </View>);
  }
}
