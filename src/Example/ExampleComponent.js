import React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class ExampleComponent extends React.Component {
  static navigationOptions = {
    title: 'Example',
  };

  render() {
    const { actions, seconds, paramsExample } = this.props
    return (
      <View style={styles.container}>
        <Text>Total elapsed <Text style={styles.textStore}>{seconds}</Text> seconds from redux store</Text>
        <Text>Press after <Text style={styles.textRoute}>{paramsExample}</Text> seconds from route params</Text>
        <Button title="Open Drawer" onPress={actions.openDrawer} />
        <Button title="Back" onPress={actions.back} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRoute: { 
    fontWeight: '600', 
    color: 'blue'
  },
  textStore: { 
    fontWeight: '600', 
    color: 'red'
  },
});
