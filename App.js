import React from 'react'
import { Provider } from 'react-redux'
import { AppLoading, Font, Icon } from 'expo';

import store from './src/AppStore'
import AppNavigation from './src/AppNavigation'

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  render() {
    if (this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <AppNavigation />
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    const promises = []
    const fonts = Font.loadAsync({
      ...Icon.Ionicons.font,
    })
    promises.push(fonts)
    return Promise.all(promises);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isReady: true });
  };
}