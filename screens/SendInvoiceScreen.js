import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Common from "../constants/common";
import Typography from "../constants/Typography";
import Colors from "../constants/Colors";
import APITest from "../components/APITest";
import Database from "../api/database";

export default class SendInvoiceScreen extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Text
        style={{
          color: "#fff",
          fontFamily: Typography.titleFont,
          fontSize: 18
        }}
      >
        Send Invoice
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
      amount: null,
      message: null,
      name: null,
      allFilled: false,
      errorMessage: ""
    };
  }
  isAllFilled() {
    if (this.state.amount && this.state.message && this.state.name) {
      this.setState({ allFilled: true, errorMessage: "" });
    } else {
      this.setState({ allFilled: false });
    }
  }
  sendInvoice() {
    Database.sendNewPayment(
      this.state.amount,
      this.state.message,
      this.state.name
    );
  }
  renderSendButton() {
    if (this.state.allFilled) {
      return (
        <TouchableOpacity
          style={Common.button}
          onPress={() => {
            this.sendInvoice();
          }}
        >
          <Text style={Common.buttonText}>Send Invoice</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={Common.buttonDisabled}
          onPress={() => {
            this.setState({ errorMessage: "Please, fill all the forms" });
          }}
        >
          <Text style={Common.buttonText}>Send Invoice</Text>
        </TouchableOpacity>
      );
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={Common.h2}>Welcome to the real world</Text>
        <Text style={Common.bodyText}>
          All the information displayed here is retrieved from Nordea's API
        </Text>
        <TextInput
          placeholder={"in EUR"}
          keyboardType={"numeric"}
          onChangeText={amount => {
            this.setState({ amount });
            this.isAllFilled();
          }}
          value={this.state.amount}
        />
        <TextInput
          placeholder={"Message"}
          keyboardType={"numeric"}
          onChangeText={message => {
            this.setState({ message });
            this.isAllFilled();
          }}
          value={this.state.message}
        />
        <TextInput
          placeholder={"Name"}
          keyboardType={"numeric"}
          onChangeText={name => {
            this.setState({ name });
            this.isAllFilled();
          }}
          value={this.state.name}
        />
        {this.renderSendButton()}
        <Text style={Common.bodyTextError}>{this.state.errorMessage}</Text>
      </View>
    );
  }
}
