import React from 'react';
import { DrawerActions } from 'react-navigation'
import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  BackHandler
} from 'react-native';

import store from './AppStore'

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
    headerLeft: (
      <Button
        onPress={() => store.dispatch(DrawerActions.openDrawer())}
        title="Menu"
        color="#000"
      />
    ),
  }

  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    this.tick = setInterval(() => this.props.actions.updateSeconds(this.props.seconds + 1), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.tick)
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    this.props.actions.updateSeconds(0)
  }

  render() {
    const { seconds, navigation, actions } = this.props
    return (
      <View style={styles.container}>
        <Text>Total elapsed <Text style={styles.textStore}>{seconds}</Text> seconds from redux store</Text>
        <Button title="Open Drawer" onPress={actions.openDrawer} />
        <Button title="Navigate to Example" onPress={() => navigation.navigate('Example', { paramsExample: seconds })} />
        <Button title="Sign me out :)" onPress={this._signOut} />
      </View>
    );
  }

  _back = () => {
    const { nav } = this.props;
    if (nav.index === 0) {
      return false;
    }

    this.props.actions.back()
    return true;
  }

  _signOut = async () => {
    await this.props.actions.signOut()
    this.props.navigation.navigate('Loading');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStore: { 
    fontWeight: '600', 
    color: 'red' 
  }
});
