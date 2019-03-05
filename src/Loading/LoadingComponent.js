import React from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet
} from 'react-native';

export default class LoadingComponent extends React.Component {
  async componentDidMount() {
    const { navigation, actions } = this.props
    const { token } = await actions.check()
    navigation.navigate(token ? 'AppStack' : 'AuthStack');
  }

  componentDidUpdate(prevProps) {
    const { token, navigation } = this.props
    if (token !== prevProps) navigation.navigate(token ? 'AppStack' : 'AuthStack');
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator style={styles.container} />
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
});
