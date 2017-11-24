import React from 'react';
import { View, Text, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import Database from '../api/database';

export default class APITest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            assets: {}
        }
    }
    getAccountInfo = () => {
       Database.listUserAssets((assets) => {
           this.setState({
               assets
           })
       })
    }
    
  render() {
    return (<View>
        <Text>Getting inside as</Text>
        <TouchableOpacity onPress={() => {this.getAccountInfo()}}>
            <Text>Send request</Text>
        </TouchableOpacity>
    </View>);
  }
}
