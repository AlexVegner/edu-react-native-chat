import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {
  Router,
  Actions
} from 'react-native-router-flux'

let state = {
  name: ''
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }
  render() {
    return (
      <View>
        <Text style={styles.title}>
          Enter your name :
        </Text>
        <TextInput
          style={styles.nameInput}
          placeholder="Alex show"
          onChangeText={(text) => {
            this.setState({
              name: text,
            });
          }}
          value={this.state.name}
        />
        <TouchableOpacity
          onPress={() => {
            // navigate to second scree, and pass it the name
            //debugger;
            //console.log(this.state.name);
            Actions.chat({
              name: this.state.name
            });
          }}
        >
          <Text style={styles.buttonText}>
            Next
          </Text>
        </TouchableOpacity>
      </View>

    );
  }
}

var styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
  },
  nameInput: {
    padding: 5,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20
  },
  buttonText: {
    marginLeft: 22,
    marginRight: 22
  }
});

export default Home;
