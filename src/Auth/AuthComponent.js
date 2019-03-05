import React from 'react';
import {
  Button,
  View,
} from 'react-native';

export default class AuthComponent extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  state = {
    password: '',
    username: '',
  };

  render() {
    return (
      <View>
        <Button title="Sign in!" onPress={this._signIn} />
      </View>
    );
  }

  _signIn = async () => {
    const { password, username } = this.state
    await this.props.actions.signIn({ username, password })
    this.props.navigation.navigate('Loading');
  };
}