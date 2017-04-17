import React, { Component } from 'react';

import {
  View,
  Text,
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Backend from '../Backend';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
    this.onSend = this.onSend.bind(this);
  }
  componentWillMount() {
  }
  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
            Backend.sendMessage(message);
        }}
        user={{
          _id: 2,
        }}
      />
    );
  }

  componentDidMount() {
   Backend.loadMessages((message) => {
     this.setState((previousState) => {
       return {
         messages: GiftedChat.append(previousState.messages, message),
       };
     });
   });
 }

 componentWillUnmount() {
   Backend.closeChat();
 }
}


Chat.defaultProps = {
  name: 'John'
}

Chat.propType = {
  name: React.PropTypes.string,
}

export default Chat;
