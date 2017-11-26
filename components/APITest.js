import React from 'react';
import { View, Text, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import Database from '../api/database';
import Common from '../constants/common';

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
       Database.listUserAssets((res) => {this.setState({res})})
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
    return (<View style={{flex: 1}}>
        {/* <TouchableOpacity style={Common.button} onPress={() => {this.getAccountInfo()}}>
            <Text style={Common.buttonText}>getAccountInfo</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={Common.button} onPress={() => {Database.listAccounts((res) => {this.setState({res})})}}>
            <Text style={Common.buttonText}>List accounts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Common.button} onPress={() => {Database.getAccountDetailsById(this.state.accounts[0]._id, (res) => {this.setState({res})})}}>
            <Text style={Common.buttonText}>List account details by id</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Common.button} onPress={() => {Database.getAccountTransactions(this.state.accounts[0]._id, (res) => {this.setState({res})})}}>
            <Text style={Common.buttonText}>List account transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Common.button} onPress={() => {Database.getAllPayments((res) => {this.setState({res})})}}>
            <Text style={Common.buttonText}>Get all payments</Text>
        </TouchableOpacity>

        <Text style={Common.bodyText}>{JSON.stringify(this.state.res)}</Text>
    </View>);
  }
}
